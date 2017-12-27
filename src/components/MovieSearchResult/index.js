import propTypes from 'prop-types';
import { Movie as MovieModel } from '../../store/movies/models';

const MovieSearchResult = ({ movie }) => {

    return (
        <a href={'/movie/' + movie.id}>
            <img
                src={movie.posterImage}
                onError={
                    (e) => e.target.src = movie.placeholderImage
                }
                alt="undefined poster"
                className="resultPoster" />
            <div>
                <p>{movie.title}</p>
                <p>{movie.releaseDate}</p>
            </div>
        </a>
    );

};

MovieSearchResult.propTypes = {
    movie: propTypes.instanceOf(MovieModel)
};

export default MovieSearchResult;