import { Link } from 'react-router-dom';


const GenresPage = (props) => {
    const { item, title, books } = props;

    return (
        <div className='text-black '>
            <div className=''>
                {item.title}-{item.descriptionG}
            </div>
            
            <Link to={`/genres/${item.id}`}>
                      <button>
                          Просмотреть
                      </button>
                  </Link>
        </div>
    )
}

export default GenresPage;
