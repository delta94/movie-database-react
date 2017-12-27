import React, { Component } from 'react';
import { connect } from 'react-redux'

import SearchBar from '../../components/SearchBar/SearchBar'
import NewMovies from '../NewMovies/NewMovies'
import SearchResults from '../SearchResults/SearchResults'

import * as actions from '../../store/movies/actions'

class Home extends Component {

  constructor(props) {
    super(props);
    props.getFeaturedMovies()
  }

  renderMovies() {
    const hasSearchResults = this.props.searchResult.length;
    if (hasSearchResults) {
      return <SearchResults searchResult={this.props.searchResult} />
    }
    return <NewMovies movies={this.props.newMovies} />
  }

  render() {
    return (
        <div>
        <SearchBar />
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newMovies: state.movies.featured,
    searchResult: state.movies.searchResult
  }
}

export default connect(mapStateToProps, {
  getFeaturedMovies: actions.getFeaturedMovies
})(Home)