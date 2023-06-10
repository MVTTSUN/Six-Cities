import { createAction } from '@reduxjs/toolkit';
import { cities } from '../mocks/cities';
import { Offer } from '../types/types';

type CityName = typeof cities[number];

export const setCity = createAction<CityName>('city/set');
export const setOffers = createAction<Offer[]>('offers/set');
