import React from 'react';

import 'styles/components/call-timer.scss';

const callTimer = ({ time = { hours: '00', mins: '00', secs: '00' }, cssClass = '' }) => (
  <div className={`call-timer ${cssClass}`}>Call Time: {time.hours}:{time.mins}:{time.secs}</div>
);

// Prop types for the component
callTimer.propTypes = {
  time: React.PropTypes.object,
  cssClass: React.PropTypes.string
};

export default callTimer;
