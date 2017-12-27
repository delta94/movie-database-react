import MovieSearchResult from '../../components/MovieSearchResult'

import './SearchResults.css'

const SearchResults = ({ searchResult }) => {

    return (
        <form>
        <ul id="results" className="formResults">
            {
                searchResult && searchResult.length > 0 ?
                    (searchResult.map((movie, i) =>
                        <li>
                            <MovieSearchResult key={i} movie={movie} />
                        </li>)) :
                    null
            }
        </ul>
        </form>
    )
}

export default SearchResults

