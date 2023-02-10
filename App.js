import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {COLORS} from './src/constants/colors';
import HomeScreen from './src/screens/Home/index';
import DetailsScreen from './src/screens/Details/index';
import HistoricalScreen from './src/screens/Historical/index';
import Toast from 'react-native-toast-message';
import store from './src/redux/store';
import {Provider} from 'react-redux';
export default function App() {
  const Stack = createNativeStackNavigator();

  // status bar for both platforms with color
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={{backgroundColor, height: StatusBar.currentHeight}}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
  return (
    <>
      <Provider store={store}>
        {/* status bar here */}
        <MyStatusBar
          backgroundColor={COLORS.primaryDark}
          barStyle="light-content"
        />
        {/* navigation stack here */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Details"
              component={DetailsScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Historical"
              component={HistoricalScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* global toast here */}
        <Toast position="top" topOffset={30} />
      </Provider>
    </>
  );
}
