import { MouseEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type typeCardProps = {
  id: number;
  image: string;
  price: number;
  isPremium: boolean;
  rating: number;
  title: string;
  type: string;
  onListCardHover: (listItemId: string) => void;
  block: string;
}


function Card({ id, image, price, isPremium, rating, title, type, block, onListCardHover }: typeCardProps) {

  const [, setOfferId] = useState('');

  const handleCardOver = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    setOfferId(id);
    onListCardHover(id);
  };

  function handleCardOut(evt: MouseEvent<HTMLLIElement>) {
    evt.preventDefault();
    setOfferId('');
    onListCardHover('');
  }

  return (
    <article className={`${block}__card place-card`}
      onMouseOver={handleCardOver}
      onMouseOut={handleCardOut}
    >
      {isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 100 / 5}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
