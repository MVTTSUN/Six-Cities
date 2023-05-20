import Authorize from '../../components/authorize/authorize';
import FavoriteCard from '../../components/favorite-card/favorite-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import PrivateRoute from '../../components/private-route/private-route';
import SignOut from '../../components/sign-out/sign-out';
import { AuthStatus } from '../../const';

export default function FavoritesScreen() {
  return (
    <PrivateRoute authStatus={AuthStatus.NoAuth}>
      <div className="page">
        <Header>
          <Authorize>
            <SignOut />
          </Authorize>
        </Header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoriteCard />

                    <FavoriteCard />
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoriteCard />
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </PrivateRoute>
  );
}
