import { useState } from 'react';
import Sorting from '../../components/sorting/sorting';
import { LocationSitesList } from '../../components/locationCitesList/locationCitesList';
import Header from '../../components/header/header';
import CardList from '../../components/card_list/card_list';
import { Map } from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sortOffersByType } from '../../utils/utils';
import { BlockName } from '../../const';
import { typeOffer ,typeOffersList, typeCityOffer } from '../../types/type_offers';
import { typeSortOffer } from '../../types/sorting';

type mainPageProps = {
  rentalOffer: number;
  offersList: typeOffersList[];
  city: typeCityOffer;
  offers: typeOffer[];
}


function MainPage({ rentalOffer, offers, city }: mainPageProps) {
  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOffersByCity(selectedCity?.name, offersList);
  const rentalOffersCount = selectedCityOffers.length;

  const [selectedOffer ,setSelectedOffer] = useState<typeOffersList | undefined>(undefined);

  const [activeSort, setActiveSort] = useState<typeSortOffer>('Popular');

  const handleListItemHover = (listItemId: string) => {
    const currentOffer = offersList.find((offer) => (offer.id === listItemId));
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
              <b className="places__found"> { rentalOffersCount } places to stay in { selectedCity?.name }</b>
              <Sorting activeSorting={ activeSort } onChange={ (newSorting) => setActiveSort(newSorting) } />
              <div className="cities__places-list places__list tabs__content">
                <CardList block={ BlockName.AllPages } offersList={ sortOffersByType(selectedCityOffers, activeSort) } onListCardHover={ handleListItemHover } />
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
