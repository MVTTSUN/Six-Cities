import Authorize from '../../components/authorize/authorize';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import SignOut from '../../components/sign-out/sign-out';

export default function MainEmptyScreen() {
  return (
    <div className="page page--gray page--main">
      <Header>
        <Authorize>
          <SignOut />
        </Authorize>
      </Header>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Navigation />
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
