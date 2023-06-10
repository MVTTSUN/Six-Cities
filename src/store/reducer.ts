import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';
import { setCity, setOffers } from './action';

const initialState = {
  city: cities[0],
  offers: offers.filter(({city}) => city.name === cities[0])
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offers.filter(({city}) => city.name === state.city);
    });
});
