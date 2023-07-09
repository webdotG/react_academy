import Card from '../../components/card/card';
import RightSection from '../../components/right_section/right_section';
import Sorting from '../../sorting/sorting';
import Location from '../../components/location/location';
import Header from '../../components/header/header';
import SitiesPlacesText from '../../components/cities_places/cities_places';

function MainPage() {

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
              <SitiesPlacesText />
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
