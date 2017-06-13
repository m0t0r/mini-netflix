import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {

  state = {
    searchTerm: ''
  };

  handleSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className='search'>
        <header>
          <h1>react app v3</h1>
          <input onChange={this.handleSearchTerm} value={this.state.searchTerm} type="text" placeholder="Search"/>
        </header>
        <div>
          {
            preload.shows
              .filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1)
              .map(show => <ShowCard key={show.imdbID} show={show}/>)
          }
        </div>
      </div>
    );
  }

}

export default Search;
