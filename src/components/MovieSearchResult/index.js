
const MovieSearchResult = ({ movie }) => {

    let image = movie.poster_path ? `https://image.tmdb.org/t/p/w640/${movie.poster_path}` : null
    let imagePath = image ? <img src={image} alt="undefined poster" className="resultPoster"/> : null
   
    return (
        <a  href={'/movie/' + movie.id}>
                { imagePath }
                    <div>
                        <p>{movie.title}</p>
                        <p>{movie.release_date}</p>
                    </div>
            </a>
         )

}

export default MovieSearchResult