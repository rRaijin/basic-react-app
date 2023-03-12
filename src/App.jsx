import './App.css';
import Menu, { menuVar, MyComponent, myVar2 } from './components/Menu';
import { useState } from 'react';

import MyCard, { myNumber } from './components/cards/MosaicItem';

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

const homeworkTitle1 = 'Homework 1'

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

const books = [
  {
    title: 'book 1111111112222',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui debitis libero minus nulla alias optio.'
  },
  {
    title: 'book 2',
    description: 'Placeat, obcaecati soluta aliquid dignissimos totam optio tenetur molestias quae maxime ipsum ratione.'
  }
];

const pups = [
  {
    title: 'book 1111111112222',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui debitis libero minus nulla alias optio.'
  },
  {
    title: 'book 2',
    description: 'Placeat, obcaecati soluta aliquid dignissimos totam optio tenetur molestias quae maxime ipsum ratione.'
  }
];

const Card1 = (props) => {
  const { title, description, index } = props;
  let [clicked, setClicked] = useState(0); // локальное состояние каждого элемента 
  const clickHandler = () => {
    console.log('cl: ', clicked)
    setClicked(clicked+1);
  }

  console.log('clicked:', clicked);
  return (
    <div key={`book-${index}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Clicked: {clicked}</p>
      <button onClick={clickHandler}>
        CLICK
      </button>
    </div>
  )
}

const App = () => {
    const show = true;
    return (
        <div className='container'>
            <h1 className='text-blue1'>{myZagolovokSaita}</h1>
            <Menu
                items={mainMenu}
                color='red'/>

            <MyCard
                item={items[0]}/>

            <div className='homework-1'>
                <h2 className='text-blue1'>{homeworkTitle1}</h2>
                <div>
                    {
                        items.map((item, i) => {
                            return (
                                <div className='text-white' key={`div-item-${i}`}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <img src={item.url} alt={`picture-${item.title}`}/> 
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='homework-2'>
                {
                  show ? 
                  <div>
                    {
                      books.map((book, index) => { // либо сразу после стрелочки указывается то, что возвращается либо фигурные скобки и внутри return 
                        console.log('book: ', book);
                        return <Card1
                                  title={book.title}
                                  description={book.description}
                                  index={index}/>
                      })
                    }
                  </div> :
                  <div>
                    {
                      pups.map((pup, index) =>
                        <Card1
                          title={pup.title}
                          description={pup.description}
                          index={index}/>
                      )
                    }
                  </div>
                }
            </div>
        </div>
    );
}

export default App;
