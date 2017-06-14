// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={(props) => <Search shows={preload.shows} {...props}/>} />
      <Route path="/details/:id" component={(props: { match: Match }) => {
        const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
        return <Details show={selectedShow} {...props} />;
      }}
      />
    </div>
  </Provider>
);

export default App;
