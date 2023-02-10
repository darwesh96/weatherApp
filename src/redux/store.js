import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  weather: weatherReducer,  // weather reducer
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// persist state here
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
