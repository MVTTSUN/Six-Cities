import { useEffect, useRef } from 'react';
import { Offer } from '../../types/types';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { useAppSelector } from '../../hooks';

type MapProps = {
  offersData: Offer[];
  place: string;
}

const defaultIcon = new Icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({offersData, place} : MapProps) {
  const {offers} = useAppSelector((state) => state);
  const mapElement = useRef(null);
  const map = useMap(mapElement, offers[0].city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({ lat: offer.location.latitude, lng: offer.location.longitude});
        marker
          .setIcon(defaultIcon)
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (<section ref={mapElement} className={`${place}__map map`}></section>);
}
