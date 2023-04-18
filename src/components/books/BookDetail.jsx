const BookDetail = (props) => {
    const { item, genres, authors, stars } = props;
    
    // {id: 4, title: 'Детектив'} - g
    // genre: [1, 2, 3], => item.genre
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);

    // variant 1   
    // внутри filter, в скобочках справа от стрелки стоит условие, возвращает boolean
    // filter возвращает отфильтрованный массив
    // const bookAuthor = authors.filter(a => a.id === 1)
    // const bookAuthor1 = authors.filter(k => k.id === item.author)[0];
    // console.log('bookAuthor1: ', bookAuthor1);
    const bookAuthor2 = authors.find(k => k.id === item.author);
    // console.log('bookAuthor2: ', bookAuthor2);
    // const bookStars = stars.find(s => s.id === item.star);


    // *****ДОМАШНЕЕ ЗАДАНИЕ***** ==> Решение писать под каждой задачей и выводить результат в консоль, как показано на 1м упражнении
    const task1 = [1, 'a', 5, null, false, 46, 1];
    // Задача 1 - Из массива - task1 - вернуть массив с числом 1
    // Решение:
    const solution_1 = task1.filter(x => x === 1);
    console.log('solution_1: ', solution_1);

    // Задача 2 - Из массива - task1 - вернуть массив только чисел

    // Задача 3 - Из массива - task1 - вернуть массив только чисел и строк

    const myObjects = [1, 'a', {a: 1, b: 'cat'}, {}, {}, {a: 2, b: 45, c: 11}, {a: 1}];
    // Задача 4 - Из массива - myObjects - вернуть массив объектов

    // Задача 5 - Из массива - myObjects - вернуть массив НЕ ПУСТЫХ объектов

    // Задача 6 - Из массива - myObjects - вернуть массив объектов, у которых больше 2х свойств
    // материал для задачи 6 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

    // Задача 7 - Из массива - myObjects - НАЙТИ объект, у которого для одного из свойств значение 'cat'
    // материал для задачи 7 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values


    return (
        <div className=''>
            <img className='w-15p mt-30px ml-6p' src={`/books/${item.picture}`} alt='mark-tven'/>
            <div className="ml-11p">
                <img className="w-1p" src="/books/star.png" alt="star"/>
                <img className="w-1p" src="/books/star.png" alt="star"/>                   
                <img className="w-1p" src="/books/star.png" alt="star"/>                  
                <img className="w-1p" src="/books/star.png" alt="star"/>                   
                <img className="w-1p" src="/books/star.png" alt="star"/>      
                       
                {/* {bookStars.stars} */}
                 
            </div>
            <div className='bold font-family-cursive text-light-orange'>
                Название: {item.bookName}
            </div>
            <div className='bold font-family-cursive text-turquoise'>
                Год: {item.year}
            </div>
            <div className='bold font-family-cursive flex-col'>
                <ul className=''>
                    <li className='text-light-orange'>
                        Жанры:
                    </li>
                    {
                        filteredGenres.map((genre, index) => {
                            return (
                                <li className='card-item' key={`genre_${index}`}>
                                    {genre.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='bold font-family-cursive flex'>
                <div className="text-light-orange">
                    Автор:
                </div>
                <div className="text-turquoise"> 
                    {bookAuthor2.firstName} {bookAuthor2.lastName}
                </div>     
                
            </div>
            <div className='bold font-size-20px font-family-cursive text-light-pink'>
                {item.price} грн
            </div>
        </div>
    )
}

export default BookDetail;
