// @flow

import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {

  it('renders correctly', () => {
    const component = shallow(<Search shows={preload.shows}/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    const component = shallow(<Search shows={preload.shows}/>);

    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const searchTerm = 'black';
    const component = shallow(<Search shows={preload.shows}/>);
    component.find('input').simulate('change', { target: { value: searchTerm } });
    const showCount = preload.shows.filter(
      show => `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1
    ).length;

    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
