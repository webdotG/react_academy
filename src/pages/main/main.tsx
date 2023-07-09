import Card from '../../components/card/card';
import RightSection from '../../components/right_section/right_section';
import Sorting from '../../components/sorting/sorting';
import Location from '../../components/location/location';
import Header from '../../components/header/header';

type mainPageProps = {
  rentalOffer: number;
}

function MainPage({rentalOffer}:mainPageProps) {

  return (
    <div>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffer}mainP places to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </section>
            <div className="cities__right-section">
              <RightSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
