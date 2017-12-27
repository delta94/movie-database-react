import React, { Component } from 'react'
import { connect } from 'react-redux'

import MovieCast from '../../components/MovieCast'

import * as actions from '../../store/movies/actions'

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        let movieId = this.props.match.params.id;
        props.getMovieDetails(movieId);
    }

    render() {
        let { movieDetail } = this.props;

        if (!movieDetail) {
            return null;
        }

        let image = movieDetail.poster_path ? `https://image.tmdb.org/t/p/w640/${movieDetail.poster_path}` : null
        let imagePath = image ? <img src={image} alt="undefined poster" className="posterImg" /> : null

        return (
            <div>
                <div className="moviePage">
                    <div className="poster">
                        {imagePath}
                    </div>
                    <section className="movieDetails">
                        <h2 className="sectionTitle">{movieDetail.title}</h2>
                        <ul className="detailsList">
                            <li><span className="bold">Release date:</span> {movieDetail.release_date} </li>
                            <li><span className="bold">Rating: </span> {movieDetail.vote_average} </li>
                            <li><span className="bold">Vote count: </span> {movieDetail.vote_count} </li>
                            <li>
                                <span className="bold">Genres: </span>
                                {
                                    movieDetail.genres.map((genre, i) =>
                                        genre.name + (i != movieDetail.genres.length - 1 ? ', ' : ''))
                                }
                            </li>
                        </ul>
                        <p>{movieDetail.overview}</p>
                    </section>
                </div>
                <MovieCast cast={movieDetail.credits.cast} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movieDetail: state.movies.selectedMovie
    }
}

export default connect(mapStateToProps, {
    getMovieDetails: actions.getMovieDetails
})(MovieDetails)