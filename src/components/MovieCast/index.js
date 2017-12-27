const MovieCast = ({ cast }) => 
    <div>
        <h3>Cast</h3>
        <div className="figureContainer">
            {
                cast && cast.length ? 
                cast.slice(0, 6).map((item, index) => 
                    <figure key={index}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="poster" className="imgResponsive" />
                        <figcaption>{item.name}</figcaption>
                    </figure>
                )
                : null
                } 
        </div>
    </div>

export default MovieCast