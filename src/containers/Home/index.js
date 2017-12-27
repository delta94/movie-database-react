import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NewMovies from '../NewMovies';
import SearchResults from '../SearchResults';

import * as actions from '../../store/movies/actions';

class Home extends Component {

  constructor(props) {
    super(props);
    props.getFeaturedMovies();
  }

  renderMovies() {
    const hasSearchResults = this.props.searchResult.length;
    if (hasSearchResults) {
      return <SearchResults searchResult={this.props.searchResult} />;
    }
    return <NewMovies movies={this.props.newMovies} />;
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

Home.propTypes = {
  getFeaturedMovies: propTypes.func.isRequired,
  newMovies: propTypes.array,
  searchResult: propTypes.array
};

const mapStateToProps = (state) => {
  return {
    newMovies: state.movies.featured,
    searchResult: state.movies.searchResult
  };
};

export default connect(mapStateToProps, {
  getFeaturedMovies: actions.getFeaturedMovies
})(Home);
