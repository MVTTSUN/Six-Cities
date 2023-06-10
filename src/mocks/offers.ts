import type { Offer } from '../types/types';

const offers: Offer[] = [
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    id: 1,
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 4.0,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  },
  {
    city: {
      name: 'London',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    id: 2,
    isFavorite: false,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 100,
    rating: 4.6,
    title: 'lorem gffjhfjhfj',
    type: 'home',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    id: 3,
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    }
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    id: 4,
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    }
  }
];

export { offers };
