import api from '../../api'

const MovieService = {
    getFeatured() {
        return api.get('discover/movie', {
           language: 'en-US',
           sort_by: 'popularity.desc',
           include_adult: false,
           include_video: false,
           page: 1,
           'primary_release_date.gte': '2017-11-20',
           'primary_release_date.lte': '2017-12-20'
        })
           .then(result => result.data ? result.data.results : [])
           .catch(err => err)
   },

   searchMovies(query) {
    return api.get('search/movie', {
        language:'en-US',
        query: query,
        page:1,
        'include_adult':'false'
     })
        .then(result => result.data ? result.data.results : [])
        .catch(err => err)
   },

   getMovieDetails(movieId) {
    return api.get(`movie/${movieId}`, {
        language:'en-US',
        append_to_response: 'credits'
     })
        .then(result => result.data ? result.data : null)
        .catch(err => err)
   }
}

export default MovieService