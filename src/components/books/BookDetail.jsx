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
    console.log('bookAuthor2: ', bookAuthor2);
    // const bookStars = stars.find(s => s.id === item.star);


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
