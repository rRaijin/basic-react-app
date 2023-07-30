import books from '../mock/books.json';
import authors from '../mock/authors.json';


import { Component } from 'react';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// // Data for authors and books

// // Component for the list of authors
// class AuthorsPage extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Список авторов</h1>
//         <ul>
//           {authors.map((author) => (
//             <li key={author.id}>
//               <Link to={`/books/${author.id}`}>{`${author.firstName} ${author.lastName}`}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class BooksByAuthorPage extends Component {
//   render() {
//     const authorId = this.props.match.params.authorId;
//     const booksByAuthor = books.filter((book) => book.author === parseInt(authorId));
//     const author = authors.find((author) => author.id === parseInt(authorId));

//     return (
//       <div>
//         <h1>Книги автора {`${author.firstName} ${author.lastName}`}</h1>
//         <ul>
//           {booksByAuthor.map((book) => (
//             <li key={book.id}>
//               <Link to={`/book/${book.id}`}>{book.bookName}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// class BookPage extends Component {
//   render() {
//     const bookId = this.props.match.params.bookId;
//     const book = books.find((book) => book.id === parseInt(bookId));

//     return (
//       <div>
//         <h1>{book.bookName}</h1>
//         <p>{book.description}</p>
//         {/ Другие свойства книги... /}
//       </div>
//     );
//   }
// }

// class AuthorList extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path="/" component={AuthorsPage} />
//           <Route exact path="/books/:authorId" component={BooksByAuthorPage} />
//           <Route exact path="/book/:bookId" component={BookPage} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default AuthorList;
