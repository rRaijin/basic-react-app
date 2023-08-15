import { Link } from 'react-router-dom';


const AuthorPreview = (props) => {
    const { item, books } = props;

    return (
        <div className='text-black'>
            <p className='pl-2p'>
                {item.firstName} {item.lastName}
            </p>
            <Link to={`/author/${item.id}`}>
                <button>
                    VIEW
                </button>
            </Link>
        </div>
    )
}

export default AuthorPreview;
