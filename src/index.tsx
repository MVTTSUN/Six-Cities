import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { comments } from './mocks/comments';

const Setting = {
  PLACES_COUNT: 5
};

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount = {Setting.PLACES_COUNT}
      offersData = {offers}
      commentsData = {comments}
    />
  </React.StrictMode>,
);
