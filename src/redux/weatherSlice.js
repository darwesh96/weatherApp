import {createSlice} from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [], // array of added cities
    historical: [], // array of historical data for all cities
    nextID: 0, // assigned id when adding new city
  },
  reducers: {
    // addCity action takes a new city in the payload and push it to the state
    addCity: (state, action) => {
      // increament id for next use
      state.nextID++;
      state.cities = [...state.cities, action.payload]
        .sort((a, b) => a.date - b.date) // sort array by date
        .reverse(); // making the sort desc
    },
    // addHistorical action takes a new history object in the payload and push it to the state
    addHistorical: (state, action) => {
      state.historical = [...state.historical, action.payload];
    },
    // removeCity action takes a name in the payload and removes the corresponding cities and historical objects
    removeCity: (state, action) => {
      state.cities = state.cities.filter(el => el.name != action.payload);
      state.historical = state.historical.filter(
        el => el.name != action.payload.split(',')[0],
      );
    },
  },
});

// ACTIONS export
export const {addCity, addHistorical, removeCity} = weatherSlice.actions;

// reducer export
export default weatherSlice.reducer;
