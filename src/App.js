import React, { Component } from 'react';
import './App.css';

class RefsForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      petValue: ''
    }
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
      </div>
    );
  }
}

export default RefsForm;