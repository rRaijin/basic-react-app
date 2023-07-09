// import { useParams } from "react-router-dom";

import books from '../mock/books.json';


// const BookDetail = (props) => {
//     const { id } = useParams();
//     console.log('props: ', props, 'id in route: ', id);
    

//     return (
//         <div className="">
//             DETAIL
//         </div>
//     )
// }

// export default BookDetail;


import { Component } from 'react';
import { withRouter } from '../hocs/withRouter';
import MyWrappedComponent from '../components/books/wrappedComponent';



class BookDetail extends Component {
    componentDidMount() {
        console.log('parent BookDetail page props: ', this.props);
        console.log('ID: ', this.props.router.params.id, books, typeof this.props.router.params.id);
        const item = books.find(book => Number(book.id) === Number(this.props.router.params.id));
        console.log('MY BOOK: ', item);
    }

    render() {
        return (
            <div className="">
                <MyWrappedComponent y={1}/>
            </div>
        )
    }
}

export default withRouter(BookDetail);
