import React from 'react';

import 'styles/components/number-button.scss';

const button = ({ value, cssClass = '', onClickHandler }) => (
  <button className={`number-button ${cssClass}`} onClick={onClickHandler}>{value}</button>
);

// Prop types for the component
button.propTypes = {
  value: React.PropTypes.string,
  cssClass: React.PropTypes.string,
  onClickHandler: React.PropTypes.func
};

export default button;
