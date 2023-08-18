import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { CITIES_LOCATION } from '../../const';
import { changeCity } from '../../store/action';
import { typeCityOffer } from '../../types/type_offers';

type typeCitiesListProps = {
  selectedCity: typeCityOffer | undefined;
}

function LocationSitesList({ selectedCity }: typeCitiesListProps) {

  const dispatch = useAppDispatch();
  console.log(selectedCity);
  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li key={city.name} className="locations__item" onClick={() => {
          dispatch(changeCity(city));
        }}
        >
          <Link className={`${city.name === selectedCity?.name ? 'tabs__item--active' : 'tabs__item--disable'} locations__item-link tabs__item`} to={'/main'}>
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export {LocationSitesList};
