import GenresPage from '../components/genres/GenrePreview';
import genres from '../mock/genres.json';
const GenresPagee = () => {
    return (
        <div>
            <h1>Жанры</h1>
        <ul className='w-80p flex flex-wrap'>
            {genres.map(genre => (
                <li key={genre.id}>
                  
                  <GenresPage
                  item={genre}/>
                </li>
              ))}
        </ul>
        </div>
    );
};

export default GenresPagee;
