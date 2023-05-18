import { useState } from 'react';

import BookDetail from '../components/books/BookDetail';
import menu1 from '../mock/menu.json';
import Blink from '../components/books/Blink';

const BookPage = () => {
    const [myInputName, setMyInputName] = useState('');
    const myChangeHandlerName = (e) => {
        // console.log('dt: ', e);
        setMyInputName(e.target.value);
    }

    // В квадратных скобках указывается 2 элемента -> 1й - это единица состояния, а 2я - установщик(изменяет)
    const [myInputPriceMin, setMyInputPriceMin] = useState(0);
    const myChangeHandlerPriceMin = (e) => {
        setMyInputPriceMin(e.target.value);
    }

    const [myInputPriceMax, setMyInputPriceMax] = useState(10000);
    const myChangeHandlerPriceMax = (e) => {
        setMyInputPriceMax(e.target.value);
    }

    const [selectedGenre, setSelectedGenre] = useState(null);
    const mySelect = (e) => {
        console.log('dt: ', e.target.value);
        setSelectedGenre(e.target.value);
    }

    const genres = [
        {id: 1, title: 'Роман'},
        {id: 2, title: 'Детская литература'},
        {id: 3, title: 'Сатира'},
        {id: 4, title: 'Детектив'}
    ];

    const stars = [
        {
            id: 1,
            picture: 'star.png'
        },
        {
            id: 2,
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 3,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 4,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 5,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        }
    ]

    const authors = [
        {
            id: 1,
            firstName: 'Марк',
            lastName: 'Твен'
        },
        {
            id: 2,
            firstName: 'author'
        },
        {
            id: 3,
            firstName: 'Артур',
            lastName: 'Конан Дойл'
        },
        {
            id: 4,
            firstName: 'Элинор',
            lastName: 'Портер'
        }
    ];

    const books = [
        {
            bookName: 'Приключения Тома Сойера',
            description: 'Какое-то описание книги',
            year: 1876,
            genre: [1, 2, 3],
            price: 500,
            author: 1,
            picture: 'tom_soyer.jpg',
            star: 1
        },
        {
            bookName: 'Детектив-1',
            // description: null,
            description: 'Какое-то описание книги',
            year: 2000,
            genre: [1, 4],
            price: 2000,
            author: 2,
            picture: 'starvi.webp'
        },
        {
            bookName: 'Приключения Шерлока Холмса',
            description: 'Супер описание книги',
            year: 1892,
            genre: [4],
            price: 800,
            author: 3,
            picture: 'Adventures_of_sherlock_holmes.jpg'
        },
        {
            bookName: 'Поллианна',
            description: 'Обычное описание книги',
            year: 1913,
            genre: [1, 2],
            price: 1000,
            author: 4,
            picture: 'poliana.jpg'
        }
    ];

    const filteredBooks = books.filter(x => {
        return (
            x.price > myInputPriceMin &&
            x.price < myInputPriceMax &&
            (x.bookName.includes(myInputName) || myInputName === '') &&
            (Number(selectedGenre) === 0 || x.genre.indexOf(Number(selectedGenre)) !== -1)
        )
    });

    // console.log('state name: ', myInputName);
    // console.log('state price min: ', myInputPriceMin);
    // console.log('state price max: ', myInputPriceMax);
    // console.log('props books: ', selectedGenre);

    // ООП
    // 1. парадигма
    // 2. модульность, декомпозиция, много кода
    // 3. рефакторинг, поддержка, использование в нескольких местах.
    // 4. абстракция, наследование.

    return (
        <div className=''>
            <Blink/>

            <label>Filter by name:</label>
            <input
                type='input'
                value={myInputName}
                onChange={myChangeHandlerName}/>

            <label>Filter by price:</label>
            <input
                type='number'
                // min={0}
                // max={5000}
                value={myInputPriceMin}
                onChange={myChangeHandlerPriceMin}/>
            <input
                type='number'
                value={myInputPriceMax}
                onChange={myChangeHandlerPriceMax}/>


            <select name="select" onChange={mySelect}>
                {
                    genres.map(((g, i) => {
                        return (
                            <option value={g.id} key={`genre-${i}`}>
                                {g.title}
                            </option>
                        )
                    }))
                }
                <option value={0} key={`genre-${genres.length + 1}`}>
                    All
                </option>
            </select>

            {
                filteredBooks.map((book, index) => { 
                    return (
                        <BookDetail
                            item={book}
                            key={`book_${index}`}
                            genres={genres}
                            authors={authors}
                            stars={stars}/>
                    )
                })
            }
        </div>
    );
}

export default BookPage;
