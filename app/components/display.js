import React from 'react';

import 'styles/components/display.scss';

const display = ({ value = '', cssClass = '' }) => (
  <div className={`display ${cssClass}`}>{value}</div>
);

// Prop types for the component
display.propTypes = {
  value: React.PropTypes.string,
  cssClass: React.PropTypes.string
};

export default display;
