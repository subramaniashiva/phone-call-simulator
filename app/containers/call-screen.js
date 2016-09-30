// Library
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Display from 'components/display';
import CallTimer from 'components/call-timer';

import 'styles/containers/call-screen.scss';

// Reducer
import { resetCurrentNumber } from 'redux/reducers/current-number';
import { setCurrentScreen } from 'redux/reducers/current-screen';
import { setCurrentCallTime, resetCurrentCallTime } from 'redux/reducers/current-call-time';
import { printTopCalledNumbers } from 'redux/reducers/dialled-calls';
import { printTotalCalls } from 'redux/reducers/total-calls';

const MAX_SECONDS = 10;
const NUMBERS_TO_PRINT = 3;
let timer;

export class CallScreen extends Component {
  constructor() {
    super();
    this.handleHangup = this.handleHangup.bind(this);
    this.endCall = this.endCall.bind(this);
  }
  componentDidMount() {
    let currentTime = 0;
    timer = setInterval(() => {
      if (currentTime >= MAX_SECONDS) {
        this.endCall();
      } else {
        currentTime += 1;
        this.props.dispatch(setCurrentCallTime(currentTime));
      }
    }, 1000);
  }
  handleHangup() {
    this.endCall();
  }
  endCall() {
    clearInterval(timer);
    this.props.dispatch(resetCurrentCallTime());
    this.props.dispatch(resetCurrentNumber());
    this.props.dispatch(setCurrentScreen('keypad'));
    this.props.dispatch(printTopCalledNumbers(NUMBERS_TO_PRINT));
    this.props.dispatch(printTotalCalls());
  }
  render() {
    return (
      <div className="call-screen">
        <CallTimer time={this.props.currentCallTime} />
        <Display value={this.props.currentNumber} cssClass="call-screen-display" />
        <div className="call-screen-hang">
          <button className="hang-btn" onClick={() => this.handleHangup()}>Hangup</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNumber: state.currentNumber,
    currentCallTime: state.currentCallTime
  };
}

CallScreen.propTypes = {
  currentNumber: React.PropTypes.string,
  currentCallTime: React.PropTypes.object
};

export default connect(mapStateToProps)(CallScreen);
