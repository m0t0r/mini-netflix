// @flow

import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import preload from '../../data.json';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import { setSearchTermAction } from '../redux/action-creators';

describe('Search', () => {

  it('renders correctly', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>);

    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const searchTerm = 'black';

    store.dispatch(setSearchTermAction(searchTerm));

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchTerm}/>
        </MemoryRouter>
      </Provider>
    );

    const showCount = preload.shows.filter(
      show => `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1
    ).length;

    expect(component.find('.show-card').length).toEqual(showCount);
  });
});
