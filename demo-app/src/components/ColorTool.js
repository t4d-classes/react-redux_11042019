import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorTool = (props) => {

  // const [ colors, setColors ] = useState([ ...props.colors ]);
  const [ colors, setColors ] = useState(props.colors.concat());

  const [ colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const addColor = (e) => {
    e.preventDefault();

    setColors(colors.concat(colorForm.name));

    setColorForm({
      name: '',
      hexCode: '',
    });
  }

  console.log(colorForm);

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.map( (color, index) => <li key={index} {...props}>{color}</li>)}
    </ul>
    <form onSubmit={addColor}>
      <div>
        <label htmlFor="name-input">Name</label>
        <input type="text" id="name-input"
          name="name" value={colorForm.name} onChange={change}  />
      </div>
      <div>
        <label htmlFor="hexcode-input">Hexcode</label>
        <input type="text" id="hexcode-input"
          name="hexcode" value={colorForm.hexcode} onChange={change}  />
      </div>
      <button>Add Color</button>
    </form>
  </>;

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
