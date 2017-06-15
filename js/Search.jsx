// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>mini-netflix v2</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
