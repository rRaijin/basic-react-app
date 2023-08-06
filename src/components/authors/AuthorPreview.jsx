import { Link } from 'react-router-dom';


const AuthorPreview = (props) => {
    const { item, books } = props;

    return (
        <div className='author-preview-wrapper'>
            <p className=''>
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
