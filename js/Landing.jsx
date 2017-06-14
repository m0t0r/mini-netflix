// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTermAction } from './redux/action-creators';

const Landing = (props: {searchTerm: string, handleSearchTermChange: Function}) => (
  <div className="landing">
    <h1>mini-netflix v2</h1>
    <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({searchTerm: state.searchTerm});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange: event => {
    dispatch(setSearchTermAction(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
