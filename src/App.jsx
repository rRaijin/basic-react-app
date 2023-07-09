import './App.css';
import { Routes, Route } from 'react-router-dom';

import BookPage from './pages/books';
import Header from './components/Header';
import HomePage from './pages/home';
import Layout from './components/Layout';


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
