
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

export default MovieSearchResult;