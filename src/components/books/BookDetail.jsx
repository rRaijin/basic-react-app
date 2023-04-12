const BookDetail = (props) => {
    const { item, genres, authors } = props;
    
    // {id: 4, title: 'Детектив'} - g
    // genre: [1, 2, 3], => item.genre
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);
    const filteredAuthors = authors.filter(a => item.genre.indexOf(a.id) !== -1);

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
                    {          
                        filteredAuthors.map((authors, index) => {
                            return (
                                <li className='card-item' key={`authors_${index}`}>
                                    {authors.firstName} {authors.lastName}
                                </li>
                            )
                        })
                    }
                </div>     
                
            </div>
            <div className='bold font-size-20px'>
                {item.price} грн
            </div>
        </div>
    )
}

export default BookDetail;
