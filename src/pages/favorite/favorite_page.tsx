import CardList from '../../components/card_list/card_list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { typeOffersList } from '../../types/type_offers';

type favoritePageProps = {
  offersList: typeOffersList[];
};


function FavoritePage({ offersList }: favoritePageProps) {

  return (
    <div>
      <Header />
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
                  <CardList offersList={offersList} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritePage;
