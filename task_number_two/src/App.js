import './App.css';
import CurrencyBlock from './components/CurrencyBlock';
import Logo from './components/Logo';
import News from './components/News';
import NewsBody from './components/NewsBody';
import NewsTitle from './components/NewsTitle';
import Search from './components/Search';
import ServisList from './components/ServisList';
import Weather from './components/Weather';
import WeatherList from './components/WeatherList';

const arrayCity = [
  {
    id: 0,
    city: 'Cанкт-Петербурге',
    weather: ['Сегодня: +17', 'Завтра: +20']
  },
  {
    id: 1,
    city: 'Сочи',
    weather: ['Сегодня: +30', 'Завтра: +27']
  },
  {
    id: 2,
    city: 'Москве',
    weather: ['Сегодня: +10', 'Завтра: +15']
  },
  {
    id: 3,
    city: 'Челябинске',
    weather: ['Сегодня: +20', 'Завтра: +26']
  },
  {
    id: 4,
    city: 'Мурманске',
    weather: ['Сегодня: +8', 'Завтра: +12']
  }
] 
// Массив с данными для блока "Информация"

function App() {
  // В папке "img" находится схема, нарисованная мною, на которую я опирался при создании данного макета.

  // Каждый крупный блок обведен красной линией, блоки помельче обведены зеленым цветом.

  // Так как на странице есть много ненумерованных списков "ul" и, соответственно, много элементов "li",
  // то я решил вынести эти элементы в отдельные компоненты. Эти компоненты находятся в папке 
  // "components/repeat_componemt"

  // Так как каждый элемент "li" на странице является ссылкой, то я обернул соответствующим тегом каждый "props.children"
  // внутри компонента "ListItem"

  // Архитектуру проекта можно доработать - каждый отдельный логический блок сделать в виде папки, куда положить необходимые компоненты
  return (
    <div className="app">
      <div className='news'> {/*Блок с новостями*/}
        <News>
          <div className='news-tit'> {/*Блок с новостями из разных стран*/}
                      {/*↓ - передаю в компонент массив со странами + можно передавать данные для "href"*/}
            <NewsTitle arr={['В России', 'В Германии', 'В мире']}/>
          </div>
          <div className='news-elem'> {/*Блок с новостями из России*/}
                      {/*↓ - передаю в компонент массив со новостями из России + можно передавать данные для "href"*/}
            <NewsBody arr={['Новость 1', 'Новость 2', 'Новость 3', 'Новость 4', 'Новость 5']}/>
          </div>
        </News>
      </div>
      <div className='currency'> {/*Блок с курсами валют*/}
                      {/*↓ - передаю в компонент массив с курсами валют + можно передавать данные для "href"*/}
        <CurrencyBlock arr={['Доллар', 'Евро', 'Нефть']}/>
      </div>
      <div className='servis-list'> {/*Блок с сервисами*/}
                {/*↓ - передаю в компонент массив с сервисами. Внутри компенента, аналогично предыдущим, генерирую список "ul" и элемент списка "li"*/}
                {/*  + можно передавать данные для "href" */}
        <ServisList arr={['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир']}/>
      </div>
      <div className='search-block'> {/*Блок со строкой поиска и кнопкой + надпись*/}
        <div>
          <Logo/> {/*Блок с логотипом. Внутри только текст, генераций элементов нет*/}
          <Search/> {/*Блок со строкой поиска и кнопкой. Внутри только "input" и "button", генераций элементов нет*/}
        </div>
        <div className='search-tit'>Найдется все!</div> {/*Блок с надписью*/}
      </div>
      <div className='advertising'> {/*Блок с рекламным плакатом*/}
        Реклама о важности семейных традиций
      </div>
      <div className='information'> {/*Блок с различной информацией*/}
        {/* Для простоты будем считать, что разработчики Яндекс решили сделать 5 блоков с погодой для разных городов */}
        {arrayCity.map(el => (
          <Weather key={el.id} city={el.city}>
            <WeatherList arr={el.weather}/>
          </Weather>
        ))}
      </div>
    </div>
  );
}

export default App;
