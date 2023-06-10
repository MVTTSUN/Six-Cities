import { useState } from 'react';
import { Offer } from '../../types/types';
import Card from '../card/card';
import { useAppSelector } from '../../hooks';

type CardListProps = {
  offersData: Offer[];
  place: string;
};

export default function CardList({place} : CardListProps) {
  const {offers} = useAppSelector((state) => state);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  return (
    <div className={`${place === 'cities' ? `${place}__places-` : `${place}-places__`}list places__list tabs__content`}>
      {offers.map((offer) =>
        (
          <Card
            key={offer.id}
            {...offer}
            onMouseMove={(id: number) => setActiveOffer(id)}
            onMouseLeave={() => setActiveOffer(null)}
            place={place}
          />
        )
      )}
    </div>
  );
}
