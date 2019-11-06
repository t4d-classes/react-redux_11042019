import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// React-Redux with Hooks
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <Provider>
    <CarTool headerText="Car Tool" />
  </Provider>,
  document.querySelector('#root'),
);

