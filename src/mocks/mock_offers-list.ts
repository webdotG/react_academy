import { typeOffersList } from '../types/type_offers';

const mockOffersList: typeOffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    image: 'https://13.design.pages.academy/static/hotel/11.jpg',
    price: 370,
    isFavorite: true,
    rating: 2.9,
    title: 'Wood and stone place',
    type: 'apartment',
  },
  {
    id: '57703a5e-6de6-447a-91d4-b88a656ba978',
    image: 'https://13.design.pages.academy/static/hotel/3.jpg',
    price: 250,
    isFavorite: false,
    rating:  0.5,
    title: 'House in countryside',
    type: 'room',
  },
  {
    id: '84aca0ac-48c2-4161-b519-cb1ec03ab7bc',
    image: 'https://13.design.pages.academy/static/hotel/17.jpg',
    price: 430,
    isFavorite: true,
    rating: 4.7,
    title:  'Loft Studio in the Central Area',
    type: 'apartment',
  },
  {
    id: '44f55eca-0519-439b-97ff-9cca72fbd47f',
    image: 'https://13.design.pages.academy/static/hotel/14.jpg',
    price: 310,
    isFavorite: false,
    rating: 3.5,
    title:  'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
  },
];

export default mockOffersList;
