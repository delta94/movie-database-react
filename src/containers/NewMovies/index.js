import Movie from '../../components/Movie';
import './NewMovies.css';

const NewMovies = ({ movies }) => {

    return (
        <div>
            <section>
                <h2>New Releases</h2>
            </section>
            <div className="newMovies">
                {
                    movies && movies.length ?
                        movies.map((movie, i) => <Movie key={i} movie={movie} />) : 
                        null
                }
            </div>
        </div>
    );
};

export default NewMovies;