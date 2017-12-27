import './Movie.css';

import propTypes from 'prop-types';
import { Movie as MovieModel } from '../../store/movies/models';

const Movie = ({ movie }) => {


    return (
        <a className="movieLink" href={'/movie/' + movie.id}>
            <img 
                src={movie.posterImage}
                onError={
                    (e) => e.target.src = movie.placeholderImage
                }
                alt="undefined poster"
                className="imgResponsive"
            />
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </a>
    );
};

Movie.propTypes = {
    movie: propTypes.instanceOf(MovieModel)
};

export default Movie;