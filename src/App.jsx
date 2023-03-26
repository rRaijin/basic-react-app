import { faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons';
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
            </div>

            <div className='mt-240'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        </div>
    );
}

export default App;

// задание 1: перенести массив items в папку mock и сохранить как json, импортировать тут, вывести в console.log
// задание 2: вывести бадж
// задание 3: теорию читаем
// задание 4:
