import React, { Component } from 'react';

// Redux
import {connect} from 'react-redux';
import {actions} from './redux/store';

import './App.css';

class RefsForm extends Component {

  constructor(props) {
    super(props);
    this.counterPlus = this.counterPlus.bind(this);
    this.counterMinus = this.counterMinus.bind(this);

    this.state = {
      petValue: ''
    }
  }

  componentDidUpdate() {
    console.log('this.props from comp did rec props', this.props);
  }

  componentDidMount() {
    //console.log('this.props', this.props);
  }

  counterPlus() {
    console.log('Counter before...', this.props.inputCounter);
    this.props.onInputCounterIncrement();
    console.log("Counter right after increment, no callback", this.props.inputCounter);
  }

  counterMinus() {
    console.log('Counter before...', this.props.inputCounter);
    this.props.onInputCounterDecrement();
    console.log("Counter right after decrement, no callback", this.props.inputCounter);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { pet } = this.form;

    this.setState({
      petValue: pet.value
    }, () => console.log('state callback: ', this.state.petValue));

    console.log('this.state.petValue right after we call set state', this.state.petValue);
  }

  handleChange = (e) => {

    const { pet } = this.form;

    this.setState({
      petValueDynamic: pet.value
    });

  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <label>
            Cat
            <input type="radio" value="cat" name="pet" onChange={this.handleChange}/>
          </label>
          <label>
            Dog
            <input type="radio" value="dog" name="pet" onChange={this.handleChange}/>
          </label>
          <label>
            Alligator
            <input type="radio" value="alligator" name="pet" onChange={this.handleChange}/>
          </label>
          <input className="submitbutton" type="submit" value="Submit"/>
        </form>

        <div className="display-preview-container">
          <div className="display-preview">
            Submitted: {this.state.petValue}
          </div>

          <div className="display-preview">
            Dynamic: {this.state.petValueDynamic}
          </div>
        </div>

        <div id="counter-example">
          <span className="plus-minus" onClick={this.counterPlus}>-</span> 
          <span id="counter-display">{this.props.inputCounter}</span> 
          <span className="plus-minus" onClick={this.counterMinus}>+</span>
        </div>
      </div>
    );
  }
}

/*
 * Map state in Redux to props in our component
 */
function mapStateToProps(state) {
  return {
    inputCounter: state.inputCounter
  }
}

/*
 * Map Redux actions creators so they are
 * available in our component as this.props.onDateChange
 * for example.
 */
function mapDispatchToProps(dispatch) {
  return {
    onInputCounterChange(newInputCounter) {
      dispatch(actions.inputCounterChanged(newInputCounter));
    },
    onInputCounterIncrement(newInputCounter) {
      dispatch(actions.inputCounterIncrement(newInputCounter));
    },
    onInputCounterDecrement(newInputCounter) {
      dispatch(actions.inputCounterDecrement(newInputCounter));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RefsForm);