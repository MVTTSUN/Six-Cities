import { useState } from 'react';
import { Offer } from '../../types/types';
import Card from '../card/card';

type CardListProps = {
  offersData: Offer[];
  place: string;
};

export default function CardList({offersData, place} : CardListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  return (
    <div className={`${place === 'cities' ? `${place}__places-` : `${place}-places__`}list places__list tabs__content`}>
      {offersData.map((offer) =>
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
