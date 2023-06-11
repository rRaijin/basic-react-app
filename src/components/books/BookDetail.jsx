const BookDetail = (props) => {
    const { item, genres, authors, stars } = props;

    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);
    const bookAuthor = authors.find(k => k.id === item.author);

    return (
            <div className=''>
                <div>
                    <img className='w-15p mt-30px ml-6p' src={`/books/${item.picture}`} alt='mark-tven'/>
                    {/* <button onClick={} className="">
                        
                    </button> */}
                    
                </div>
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
                        {bookAuthor.firstName} {bookAuthor.lastName}
                    </div>     
                    
                </div>
                <div className='bold font-size-20px font-family-cursive text-light-pink'>
                    {item.price} грн
                </div>
                {/* <button onClick={}>

                </button> */}
            </div>
    )
}

export default BookDetail;
