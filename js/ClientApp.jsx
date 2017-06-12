import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, {
      title: 'Game of Thrones',
      color: 'yellowgreen'
    }),
    React.createElement(MyTitle, {
      title: 'Stranger Things',
      color: 'greenyellow'
    }),
    React.createElement(MyTitle, {
      title: 'Rick and Morty',
      color: 'limegreen'
    })
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
