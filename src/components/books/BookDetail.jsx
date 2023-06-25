const BookDetail = (props) => {
    const { item, genres, authors, stars } = props;

    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);
    const bookAuthor = authors.find(k => k.id === item.author);

    return (
        <div className='books-page-preview product'>
            <div className='books-page-preview-nested '>
                <img className='' src={`/books/${item.picture}`} alt={item.bookName}/>
                <div className="ml-11p">
                    <img className="w-1p" src="/books/star.png" alt="star"/>
                    <img className="w-1p" src="/books/star.png" alt="star"/>                   
                    <img className="w-1p" src="/books/star.png" alt="star"/>                  
                    <img className="w-1p" src="/books/star.png" alt="star"/>                   
                    <img className="w-1p" src="/books/star.png" alt="star"/>      
                </div>
                <div className='bold font-family-cursive text-light-orange font-size67p'>
                    {item.bookName}
                </div>
                <div className='bold font-family-cursive text-turquoise'>
                    {/* Год: {item.year} */}
                </div>
                <div className='bold font-family-cursive flex-col'>
                    <div className='flex'>
                        <div className='text-light-orange'>
                            {/* Жанры: */}
                        </div>
                        {
                            filteredGenres.map((genre, index) => {
                                return (
                                    <div className='card-item' key={`genre_${index}`}>
                                        {/* {genre.title} */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bold font-family-cursive flex'>
                    <div className="text-light-orange font-size67p">
                        Автор:
                    </div>
                    <div className="text-turquoise font-size67p"> 
                        {bookAuthor.firstName} {bookAuthor.lastName}
                    </div>     
                    
                </div>
                <div className='bold font-size-20px font-family-cursive text-light-pink'>
                    {item.price} грн
                </div>
                <div className="buy-button">
                    Купить
                </div>
            </div>
        </div>
    )
}

export default BookDetail;
