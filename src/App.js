import './App.css';


// MOCK DB
const mainMenu = [
  {postiton: 1, value: 'Option'},
  {postiton: 2, value: 'Option'},
  {postiton: 3, value: 'Option'},
  {postiton: 4, value: 'Option'},
  {postiton: 5, value: 'Option'},
  {postiton: 6, value: 'Option'},
  {postiton: 7, value: 'Option'},
  {postiton: 8, value: 'Option'}
];

const myZagolovokSaita = 'Hello My SIte';

// homework
const items = [
  {
    title: 'Milk',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui debitis libero minus nulla alias optio.',
    url: 'milk.png'
  },
  {
    title: 'Bread',
    description: ' Ea provident odit placeat at alias veritatis iusto soluta, consequatur, adipisci aut, repellat magni?',
    url: 'bread.png'
  },
  {
    title: 'Meet',
    description: 'Placeat, obcaecati soluta aliquid dignissimos totam optio tenetur molestias quae maxime ipsum ratione.',
    url: 'meet.png'
  }
]; // По аналогии как делали на уроке со списком - распечатать внутри дива "homework-1" несколько дивов(не список) вывести title(h2) & description(p)


const App = () => {
  return (
    <div className='container'>
      <h1>{myZagolovokSaita}</h1>
      <ul className=''>
        {
          mainMenu.map((item, i) => {
            console.log('item: ', item, 'i: ', i);
            return (
              <li className='' key={`top-menu-item-${i}`}>
                {item.value} <span>Position: {item.postiton}</span> | <span>Index: {i}</span>
              </li>
            )
          })
        }
      </ul>

      <div className='homework-1'>

      </div>
    </div>
  );
}

export default App;
