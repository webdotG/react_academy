
import Card from '../card/card';
import { BlockName } from '../../const';
import { typeOffersList } from '../../types/type_offers';

type CardListProps = {
  offersList: typeOffersList[];
  onListCardHover: (listItemId: string) => void;
  block: string;
}

function CardList({ block, offersList, onListCardHover }: CardListProps) {

  return (
    <div className={`${block.includes('cities') ? BlockName.AllPagesList : BlockName.NearOfferList} places__list`}>
      {Array.from(offersList, (item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          image={item.image}
          isPremium={item.isPremium}
          rating={item.rating}
          block={block}
          onListCardHover={onListCardHover}
        />
      ))}
    </div>
  );
}

export default CardList;
