import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlockName } from '../../const';
import NotFound from '../not_found/not_found_page';
import CardList from '../../components/card_list/card_list';
import Header from '../../components/header/header';
// import CommentsForm from '../../components/comments_form/comments_form';
import { ReviewsList } from '../../components/reviews_list/reviews_list';
import { Map } from '../../components/map/map';
import { typeOffer, typeOffersList } from '../../types/type_offers';
import { typeReviews } from '../../types/type_reviews';

type offerPageProps = {
  offers: typeOffer[];
  reviews: typeReviews[];
  offersList: typeOffersList[];
}

function OfferPage({ offers, reviews, offersList }: offerPageProps) {

  const [selectedOffer, setSelectedOffer] = useState<typeOffersList | undefined>(
    undefined
  );

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offersList.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

  const params = useParams();

  const offer = offers.find((item) => item.id === params.id);
  const nearOffers = offersList.filter((item) => item.id !== params.id);

  if (!offer) {
    return <NotFound />;
  }
  return (
    <div>
      <Helmet>
        <title>Предложение по аренде</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium ? (<div className="offer__mark"><span>Premium</span></div>) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(offer.rating) * 100 / 5}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating} </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offer.maxAdults}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (<li className="offer__inside-item" key={good}>{good}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {/* {offer.host.name} */}
                  </span>
                  <span className="offer__user-status">
                    {/* {offer.host.isPro ? 'Pro' : ''} */}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={reviews} />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map block={ BlockName.Offer } city={offer.city} offers={nearOffers} selectedOffer={ selectedOffer } />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList block={ BlockName.NearOffer} offersList={nearOffers} onListCardHover={handleListItemHover} />
          </section>
        </div>
      </main>

    </div>
  );
}

export default OfferPage;
