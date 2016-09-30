// Library
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import NumberButton from 'components/number-button';
import Display from 'components/display';

import 'styles/containers/keypad.scss';

// Reducer
import { appendCurrentNumber } from 'redux/reducers/current-number';
import { setCurrentScreen } from 'redux/reducers/current-screen';
import { increaseTotalCalls } from 'redux/reducers/total-calls';
import { setCallDetails } from 'redux/reducers/dialled-calls';

export class KeyPad extends Component {
  constructor() {
    super();
    this.handleDial = this.handleDial.bind(this);
  }
  handleDial() {
    if (this.props.currentNumber) {
      this.props.dispatch(setCurrentScreen('call'));
      this.props.dispatch(increaseTotalCalls());
      this.props.dispatch(setCallDetails({ number: this.props.currentNumber }));
    }
  }
  render() {
    return (
      <div className="keypad">
        <div className="keypad-display">
          <Display value={this.props.currentNumber} />
        </div>
        <div className="flex keypad-row">
          <NumberButton value="1" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('1'))} />
          <NumberButton value="2" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('2'))} />
          <NumberButton value="3" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('3'))} />
        </div>
        <div className="flex keypad-row">
          <NumberButton value="4" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('4'))} />
          <NumberButton value="5" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('5'))} />
          <NumberButton value="6" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('6'))} />
        </div>
        <div className="flex keypad-row">
          <NumberButton value="7" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('7'))} />
          <NumberButton value="8" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('8'))} />
          <NumberButton value="9" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('9'))} />
        </div>
        <div className="flex keypad-row">
          <NumberButton value="*" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('*'))} />
          <NumberButton value="0" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('0'))} />
          <NumberButton value="#" cssClass="keypad-btn" onClickHandler={() => this.props.dispatch(appendCurrentNumber('#'))} />
        </div>
        <div className="keypad-dial">
          <button className="dial-btn" onClick={() => this.handleDial()}>Dial</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNumber: state.currentNumber
  };
}

KeyPad.propTypes = {
  currentNumber: React.PropTypes.string
};

export default connect(mapStateToProps)(KeyPad);
