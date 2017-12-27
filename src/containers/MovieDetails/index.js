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

        return (
            <div>
                <div className="moviePage">
                    <div className="poster">
                        <img 
                            src={movieDetail.posterImage}
                            onError={
                                (e) => e.target.src = movieDetail.placeholderImage
                            }
                            alt="undefined poster"
                            className="posterImg" />
                    </div>
                    <section className="movieDetails">
                        <h2 className="sectionTitle">{movieDetail.title}</h2>
                        <ul className="detailsList">
                            <li><span className="bold">Release date:</span> {movieDetail.releaseDate} </li>
                            <li><span className="bold">Rating: </span> {movieDetail.voteAverage} </li>
                            <li><span className="bold">Vote count: </span> {movieDetail.voteCount} </li>
                            <li><span className="bold">Genres: </span>{movieDetail.genre}</li>
                        </ul>
                        <p>{movieDetail.overview}</p>
                    </section>
                </div>
                <MovieCast cast={movieDetail.cast} />
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