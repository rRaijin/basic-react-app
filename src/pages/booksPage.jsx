import BookDetail from "../components/books/BookDetail";
import menu1 from "../mock/menu.json";

const BookPage = () => {
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
            bookName: 'Приключе́ния То́ма Со́йера',
            year: 1876,
            genre: [1, 2, 3],
            price: 500,
            author: 1,
            picture: 'tom_soyer.jpg',
            star: 1
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
        },
        {
            bookName: 'Поллианна',
            year: 1913,
            genre: [1,2],
            price: 500,
            author: 4,
            picture: 'poliana.jpg'
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
                            authors={authors}
                            stars={stars}/>
                    )
                })
            }
        </div>
    );
}

export default BookPage;
