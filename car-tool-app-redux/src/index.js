import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { carToolStore } from './carToolStore';

// React-Redux with Hooks
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <Provider store={carToolStore}>
    <CarTool headerText="Car Tool" />
  </Provider>,
  document.querySelector('#root'),
);

// React-Redux with Connect
// import { CarToolContainer } from './containers/CarToolContainer'; 

// ReactDOM.render(
//   <Provider store={carToolStore}>
//     <CarToolContainer headerText="Car Tool" />
//   </Provider>,
//   document.querySelector('#root'),
// );
