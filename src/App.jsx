import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';

import './App.css';
import Menu, { menuVar, MyComponent, myVar2 } from './components/Menu';
import menu1 from './mock/menu.json';
import items from './mock/items.json';


console.log('menu: ', menu1);
const myZagolovokSaita = 'Hello My SIte';
const homeworkTitle1 = 'Homework 1'
// homework


const App = () => {
    const show = true;
    return (
        <div className='container'>
            <h1 className='text-blue1'>{myZagolovokSaita}</h1>
            <Menu
                items={menu1.menuItems}
                color='red'/>

            <FontAwesomeIcon icon={faCoffee} />

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <div className='homework-1'>
                <h2 className='text-blue1'>{homeworkTitle1}</h2>
                <div>
                    {
                        items.map(function(item, index) {
                            return (
                                <div className='text-white' key={`div-item-${index}`}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <img src={item.url} alt={`picture-${item.title}`}/> 
                                </div>
                            )
                        })
                    }
                </div>
                <button>sfdgdf</button>
            </div>
        </div>
    );
}

export default App;

// задание 1: перенести массив items в папку mock и сохранить как json, импортировать тут, вывести в console.log

// задание 2: вывести бадж


// задание 3: теорию читаем
// задание 4: 