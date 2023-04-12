import BookDetail from "../components/books/BookDetail";

const BookPage = () => {
    const genres = [
        {id: 1, title: 'Роман'},
        {id: 2, title: 'Детская литература'},
        {id: 3, title: 'Сатира'},
        {id: 4, title: 'Детектив'}
    ];

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
        }
    ];

    const books = [
        {
            bookName: 'Приключе́ния То́ма Со́йера',
            year: 1876,
            genre: [1, 2, 3],
            price: 500,
            author: 1,
            picture: 'tom_soyer.jpg'
        },
        {
            bookName: 'Детектив-1',
            year: 2000,
            genre: [1, 4],
            price: 1000,
            author: 2,
            picture: 'starvi.webp'
        },
        {
            bookName: 'Приключения Шерлока Холмса',
            year: 1892,
            genre: [4],
            price: 1000,
            author: 3,
            picture: 'Adventures_of_sherlock_holmes.jpg'
        }
    ];

    return (
        <div className=''>
            {
                books.map((book, index) => {
                    return (
                        <BookDetail
                            item={book}
                            key={`book_${index}`}
                            genres={genres}
                            authors={authors}/>
                    )
                })
            }
        </div>
    );
}

export default BookPage;
