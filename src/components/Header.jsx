import React from 'react';
import { Link } from 'react-router-dom';


const menuItems = [
    {
        name: 'home',
        src: '/',
        icon: ''
    },
    {
        name: 'books',
        src: '/books',
        icon: ''
    }
];


const Header = () => {
    return (
        <div className='flex'>
            <div className='logo'>
                <img src='https://via.placeholder.com/50x50' alt='' />
            </div>
            <ul className='main-navigation'>
                {
                    menuItems.map((el, i) => {
                        return (
                            <li key={`nav-el-${i}`} className='text-blue'>
                                <Link to={el.src}>
                                    {el.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    );
};

export default Header;
