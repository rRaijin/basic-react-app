import { Component } from 'react';

import { withRouter } from '../hocs/withRouter';
import books from '../mock/books.json';
import ComponentWithConsole, { ABComponent } from '../components/books/ComponentWithConsole';
import MyWrappedComponent from '../components/books/WrappedComponent';


class BookDetail extends Component {
    componentDidMount() {
        // console.log('parent BookDetail page props: ', this.props);
        // console.log('ID: ', this.props.router.params.id, books, typeof this.props.router.params.id);
        const item = books.find(book => Number(book.id) === Number(this.props.router.params.id));
        console.log('MY BOOK: ', item);
    }

    
    render() {
        const users = ['vasya', 'petya'];

        return (
            <div className="">
                <MyWrappedComponent y={1}/>
                {
                    ['cat', 'dog', 'cow', 'bird'].map((item, i) => {
                        return <ComponentWithConsole
                                    item={item}
                                    position={i+ 1}/>
                    })
                }
                <ABComponent user={users[0]}/>
                <ABComponent user={users[1]}/>
            </div>
        )
    }
}

export default withRouter(BookDetail);
