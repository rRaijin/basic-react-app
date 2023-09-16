import { Link } from 'react-router-dom';


const GenresPage = (props) => {
    const { item, title, books } = props;

    return (
        <div className='text-black w-35p'>
            <p className='pl-2p '>
                {item.title}  <img className='' src={`/books/${item.photoGenre}`} alt={item.genre}/>                
            </p>
            
            <Link to={`/genres/${item.id}`}>
                <button>
                    Просмотреть
                </button>
            </Link>
        </div>
    )
}

export default GenresPage;
