// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsyncRoute from './AsyncRoute';
import preload from '../data.json';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')}/>} />
      <Route path="/search" component={props =>
        <AsyncRoute props={Object.assign({shows: preload.shows}, props)} loadingPromise={import('./Search')}/>}
      />
      <Route path="/details/:id" component={(props: { match: Match }) => {
        const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
        return <AsyncRoute
          props={Object.assign({ show: selectedShow, match: {} }, props)}
          loadingPromise={import('./Details')}
        />;
      }}
      />
    </div>
  </Provider>
);

export default App;
