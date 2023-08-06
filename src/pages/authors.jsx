import { Component } from 'react';

import authors from '../mock/authors.json';
import books from '../mock/books.json';
import AuthorPreview from '../components/authors/AuthorPreview';


class AuthorsPage extends Component {
    render() {
        return (
            <div>
                <h1>Список авторов</h1>
                <ul>
                    {authors.map((author, i) =>
                        <AuthorPreview
                            item={author}
                            key={`author_${i}`}
                            books={books}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default AuthorsPage;
