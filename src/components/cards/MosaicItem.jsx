import { useState } from 'react';

const MyCard = (props) => {
    const { item } = props;
    // {
    //     title: 'Milk',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui debitis libero minus nulla alias optio.',
    //     url: 'milk.png'
    // }
    const [colorH3, setColorH3] = useState('text-white');
    const colorChangeHandler = (e) => {
        console.log('e: ', e)
        setColorH3('text-red');
    }

    const [colorIsToggle, setColorIsToggle] = useState(false);

    console.log('render: ', colorH3);

    return (
        <div className='card-item'>
            <h3 className={colorH3} onClick={colorChangeHandler}>
                {item.title}
            </h3>
            <br />
            <h4 className={colorIsToggle ? 'text-red' : 'text-white'} onClick={() => setColorIsToggle(!colorIsToggle)}>
                {item.title}
            </h4>
            <p className=''>
                {item.description}
            </p>
        </div>
    )
}

export const myNumber = 45; // єкспорт конкретного предмета

export default MyCard; // экспорт по умолчанию
