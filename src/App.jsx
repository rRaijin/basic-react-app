import { faCoffee, faHouse, faSoccerBall, faTree, faHeartCircleMinus, faMoneyBill, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';

import './App.css';
import Menu, { menuVar, MyComponent, myVar2 } from './components/Menu';
import menu1 from './mock/menu.json';
import items from './mock/items.json';
import MainPageHead from './components/MainPageHead';


console.log('menu: ', faHouse);
const homeworkTitle1 = 'Homework 1'

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

            <div className='mt-240'>
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
                <img className='w-15p mt-30px ml-6p' src="https://cdn.eksmo.ru/v2/ITD000000001120923/COVER/cover1__w820.jpg" alt="mark-tven"/>
                <div className='bold'>
                    Название: Приключе́ния То́ма Со́йера
                </div>
                <div className='bold'>
                    Год: 1876г
                </div>
                <div className='bold'>
                    Жанр: Роман, Детская Литература, Сатира  
                </div>
                <div className='bold'>
                    Автор: Марк Твен
                </div>
                <div className='bold font-size-20px'>
                    500грн
                </div>
                <input type='button' className='back-red text-white border-0 pad-10px brd-radius-7px'>
                    Купить
                </input>
                
            </div>
        </div>
    );
}

export default App;

// задание 1: перенести массив items в папку mock и сохранить как json, импортировать тут, вывести в console.log
// задание 2: вывести бадж
// задание 3: теорию читаем
// задание 4:
