import { useState } from 'react';

import BookDetail from '../components/books/BookDetail';
import menu1 from '../mock/menu.json';

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

    // ***PART 5***
    const part5 = [
        {
            a: 1,
            b: {
                a: 1,
                b: 'dog'
            }
        }, {
            a: 'dog',
            b: 12
        }
    ];
    // Задача 18: Найти объект, у которого значением свойства является другой объект со значением 'dog'
    // Решение:
    const solution_18 = part5.find(obj => {
        return typeof obj.b === 'object' && obj.b.b === 'dog'
    })
    console.log('solution_18  ',solution_18)

    const part5_1 = [
        {x: 1, y: 'abc', z: null},
        42,
        'house',
        {a: 'dog'}
    ];
    // Задача 19: У нас есть 2 массива part5 и part5_1. Нужно вернуть массив, состоящий из элементов, у которых значение a равно dog
    // Подсказка: массивы сперва нужно объединить, а затем применить фильтр
    // Материал для д/з: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    const solution_19 = part5.concat(part5_1)
    const filteredArrayDog = solution_19.filter(d => d.a === 'dog')
    console.log('filteredArrayDog  ',filteredArrayDog)

    const arr1 = [1, 2, 3];
    const arr2 = [2, 4, 5];
    // Задача 20: Учимся гуглить. Нужно из двух массивов(arr1, arr2) получить один массив, состоящий из уникальных элементов
    // Решение:
    // const solution_20 = arr1.concat(arr2).filter((index, array, item) => {
    //     return array.indexOf(item) === index;
    // })
    // console.log('solution_20  ',solution_20)
    // Задача 21: объединить массивы part5 и arr1, и сделать так чтобы первым элементом нового массива(т.е. индекс = 0) была число 3
    const solution_21 = arr1.concat(part5);
    solution_21.unshift(3);
    console.log('solution_21  ',solution_21)

    

    // console.log('state name: ', myInputName);
    // console.log('state price min: ', myInputPriceMin);
    // console.log('state price max: ', myInputPriceMax);
    // console.log('props books: ', selectedGenre);

    return (
        <div className=''>
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
