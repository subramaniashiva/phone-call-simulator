import React from 'react';
import { connect } from 'react-redux';

import KeyPad from 'containers/keypad';
import CallScreen from 'containers/call-screen';

const Main = props => (<div className="container">
  {props.currentScreen === 'keypad' ? <KeyPad /> : ''}
  {props.currentScreen === 'call' ? <CallScreen /> : ''}
</div>);

Main.propTypes = {
  currentScreen: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    child_1: state.child_1,
    currentScreen: state.currentScreen
  };
}

export default connect(mapStateToProps)(Main);
