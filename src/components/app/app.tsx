import MainPage from '../../pages/main/main';

type appPageProps = {
  rentalOffer: number;
}

function App ({rentalOffer}:appPageProps) {

  return (
    <MainPage rentalOffer={rentalOffer} />
  );
}

export default App ;
