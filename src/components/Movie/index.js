import './Movie.css';

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

export default Movie;