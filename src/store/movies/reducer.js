import { types } from './actions'

const initialState = {
    featured: [],
    searchResult: [],
    selectedMovie: null
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FEATURED_MOVIES_SUCCESS:

            return {
                ...state,
                featured: action.payload
            }

        case types.SEARCH_MOVIE_SUCCESS:

            return {
                ...state,
                searchResult: action.payload
            }

        case types.RESET_MOVIE_SEARCH:

            return {
                ...state,
                searchResult: []
            }

        case types.GET_MOVIE_DETAILS_SUCCESS:

            return {
                ...state,
                selectedMovie: action.payload
            }

        default:
            return state
    }
}

export default moviesReducer 