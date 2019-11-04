import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [
  'blue','red','hot pink',
  'yellow','maroon','salmon',
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
  </>,
  document.querySelector('#root'),
);
