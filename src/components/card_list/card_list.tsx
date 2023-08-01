import { typeOffersList } from '../../types/type_offers';
import Card from '../card/card';

type CardListProps = {
  offersList: typeOffersList[];
  onListCardHover: (listItemId: string) => void;
}

function CardList({ offersList, onListCardHover }: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          image={item.image}
          rating={item.rating}
          isFavorite={item.isFavorite}
          onListCardHover={onListCardHover}
        />
      )
      )}
    </div>
  );
}

export default CardList;
