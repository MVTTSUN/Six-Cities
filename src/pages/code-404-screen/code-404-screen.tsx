import Authorize from '../../components/authorize/authorize';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SignOut from '../../components/sign-out/sign-out';

export default function Code404Screen() {
  return (
    <>
      <Header>
        <Authorize>
          <SignOut />
        </Authorize>
      </Header>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <div className="cities__status-wrapper">
              <h1>404</h1>
              <b className="favorites__status">This page does not exist.</b>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
