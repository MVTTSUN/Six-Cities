import Authorize from '../../components/authorize/authorize';
import CardList from '../../components/cardlist/cardlist';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import SignOut from '../../components/sign-out/sign-out';
import type { Offer } from '../../types/types';
import Map from '../../components/map/map';
import SortComponent from '../../components/sort-component/sort-component';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  offersData: Offer[];
}

export default function MainScreen({offersData} : MainScreenProps) {
  const {city, offers} = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">
      <Header>
        <Authorize>
          <SignOut />
        </Authorize>
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Navigation />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <SortComponent />
              </form>

              <CardList offersData={offersData} place="cities" />

            </section>
            <div className="cities__right-section">
              <Map offersData={offersData} place="cities" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
