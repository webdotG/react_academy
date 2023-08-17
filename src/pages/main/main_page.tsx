import { useState } from 'react';
import Sorting from '../../components/sorting/sorting';
import LocationSitesList from '../../components/locationCitesList/locationCitesList';
import Header from '../../components/header/header';
import CardList from '../../components/card_list/card_list';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { BlockName } from '../../const';
import { typeOffer ,typeOffersList, typeCityOffer } from '../../types/type_offers';


type mainPageProps = {
  rentalOffer: number;
  offersList: typeOffersList[];
  city: typeCityOffer;
  offers: typeOffer[];
}


function MainPage({ rentalOffer, offersList, offers, city }: mainPageProps) {
  const selectedCity = useAppSelector((state) => state.city);
  const [selectedOffer ,setSelectedOffer] = useState<typeOffersList | undefined>(undefined);


  const handleListItemHover = (listItemId: string) => {
    const currentOffer = offersList.find((offer) => (offer.id === listItemId));
    console.log(currentOffer);
    setSelectedOffer(currentOffer);
  };


  return (
    <div>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationSitesList selectedCity={ selectedCity } />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffer} mainP places to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                < CardList block={ BlockName.AllPages } offersList={offersList} onListCardHover={handleListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map block={ BlockName.AllPages } city={city} offers={offers} selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
