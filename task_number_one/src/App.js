import './App.css';
import CardBody from './components/CardBody';
import CardButton from './components/CardButton';
import CardImg from './components/CardImg';
import CardText from './components/CardText';
import CardTitle from './components/CardTitle';
import CardWrapper from './components/CardWrapper';

function App() {
  const img = 'https://cdn.pixabay.com/photo/2022/01/26/11/19/river-6968614_960_720.png';
  return (
    <div className="app">
      <CardWrapper>
        <CardImg alt='Картинка' src={img}/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <CardButton url={'#'}>Go somewhere</CardButton>
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default App;
