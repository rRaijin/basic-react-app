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
    </div>
  );
}

export default App;
