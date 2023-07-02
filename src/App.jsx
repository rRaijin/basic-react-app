import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPageHead from './components/MainPageImageBlock';
import BookPage from './pages/booksPage';
import Header from './components/Header';
import Layout from './components/Layout';
import HomePage from './pages/home';


const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='books' element={<BookPage/>}/>
                </Route>
            </Routes>

            {/* <Footer/> */}
        </div>
    );
}

export default App;


{/* <MainPageHead subTitle='qwe' someNumber={4} myBul={true}/> // переименовать MainPageImageBlock и вывести его в BooksPage
            <BookPage/> */}