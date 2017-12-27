import './Movie.css'

const Movie = ({ movie }) => {

    let image = movie.poster_path ? `https://image.tmdb.org/t/p/w640/${movie.poster_path}` : null
    let imagePath = image ? <img src={image} alt="undefined poster" className="imgResponsive" /> : null

    return (
        <a className="movieLink" href={'/movie/' + movie.id}>
            {imagePath}
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </a>
    )
}

export default Movie