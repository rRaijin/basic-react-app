const BookDetail = (props) => {
    const { item, genres, authors } = props;
    
    // {id: 4, title: 'Детектив'} - g
    // genre: [1, 2, 3], => item.genre
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);

    // variant 1
    const authors1 = [
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
        }
    ];
    // внутри filter, в скобочках справа от стрелки стоит условие, возвращает boolean
    // filter возвращает отфильтрованный массив
    // const bookAuthor = authors.filter(a => a.id === 1)
    const bookAuthor1 = authors.filter(k => k.id === item.author)[0];
    console.log('bookAuthor1: ', bookAuthor1);
    const bookAuthor2 = authors.find(k => k.id === item.author);
    console.log('bookAuthor2: ', bookAuthor2);

    return (
        <div className=''>
            <img className='w-15p mt-30px ml-6p' src={`/books/${item.picture}`} alt='mark-tven'/>
            <div className='bold'>
                Название: {item.bookName}
            </div>
            <div className='bold'>
                Год: {item.year}
            </div>
            <div className='bold'>
                <ul className=''>
                    <li className='text-red'>
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
            <div className='bold'>
                <div>
                    Автор: 
                    {bookAuthor1.firstName} {bookAuthor1.lastName}
                </div>     
                
            </div>
            <div className='bold font-size-20px'>
                {item.price} грн
            </div>
        </div>
    )
}

export default BookDetail;
