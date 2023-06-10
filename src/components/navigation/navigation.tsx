import { Link } from 'react-router-dom';
import { cities } from '../../mocks/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity, setOffers } from '../../store/action';
import { offers } from '../../mocks/offers';

export default function Navigation() {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const clickCity = (id: number) => {
    dispatch(setCity(cities[id - 1]));
    dispatch(setOffers(offers));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => (
          <li key={`${i + 1}`} className="locations__item">
            <Link onClick={() => clickCity(i + 1)} className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} to='/'>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
