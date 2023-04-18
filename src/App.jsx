import { faCoffee, faHouse, faSoccerBall, faTree, faHeartCircleMinus, faMoneyBill, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';

import './App.css';
import Menu, { menuVar, MyComponent, myVar2 } from './components/Menu';
import menu1 from './mock/menu.json';
import items from './mock/items.json';
import MainPageHead from './components/MainPageHead';
import BookPage from './pages/booksPage';


console.log('menu: ', faHouse);
const homeworkTitle1 = 'Homework 1'

    // const genres = [
    //     {id: 1, title: 'Роман'},
    //     {id: 2, title: 'Детская литература'},
    //     {id: 3, title: 'Сатира'},
    //     {id: 4, title: 'Детектив'}
    // ];

    // const authors = [
    //     {
    //         id: 1,
    //         firstName: 'Марк',
    //         lastName: 'Твен'
    //     },
    //     {
    //         id: 2,
    //         firstName: 'author'
    //     },
    //     {
    //         id: 3,
    //         firstName: 'Артур',
    //         lastName: 'Конан Дойл'
    //     },
    //     {
    //         id: 4,
    //         firstName: 'Элинор',
    //         lastName: 'Портер'
    //     }
    // ];

// homework
// spin?: boolean
// spinPulse?: boolean
// spinReverse?: boolean
// pulse?: boolean
// beat?: boolean
// fade?: boolean
// beatFade?: boolean
// bounce?: boolean
// shake?: boolean
// border?: boolean
// fixedWidth?: boolean
// inverse?: boolean
// listItem?: boolean
// title?: string;


const App = () => {
    const show = true;
    return (
        <div className='container flex flex-col'>
            <MainPageHead subTitle='qwe' someNumber={4} myBul={true}/>

            <BookPage/>

            {/* <div className='mt-240'>
                <FontAwesomeIcon
                    icon={faCoffee}
                    color='#29d879'
                    spin={true}
                    size={'5x'}/>

                <FontAwesomeIcon icon={faHouse}/>
                <FontAwesomeIcon
                 icon={faSoccerBall}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faTree}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faHeartCircleMinus}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faHeartPulse}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faMoneyBill}
                 size={'3x'}/>
            </div>

            <div className='mt-240'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                
            </div> */}
        </div>
    );
}

export default App;

// задание 1: перенести массив items в папку mock и сохранить как json, импортировать тут, вывести в console.log
// задание 2: вывести бадж
// задание 3: теорию читаем
// задание 4:
