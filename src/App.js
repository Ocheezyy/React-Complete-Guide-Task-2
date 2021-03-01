import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';


const TextValidator = (props) => {

  const longEnough = props.length >= 5 ? <p style={{color: 'green'}}>Text long enough</p> : <p style={{color: 'red'}}>Text too short!</p>

  return (
    <div>
      <p>{longEnough}</p>
    </div>
  );
};

class App extends Component {
  state = {
    inputValue: '',
    inputLength: 0,
    inputArr: []
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputLength: event.target.value.length,
      inputArr: event.target.value.split("")
    });
  };

  // charClickHandler = (event) => {
  //   const input = [...this.state.inputValue];
  //   input.findIndex(char => {
  //     char === event.
  //   })
  //   this.setState({

  //   })
  // }




  render() {
    return (
      <div className="App">
        <h1>Second practice Task</h1>
        <input type="text" value={this.state.inputValue} onChange={(event) => this.inputChangeHandler(event)} />
        {this.state.inputLength > 0 ? <p>Text Length: {this.state.inputLength}</p> : null}
        <TextValidator length={this.state.inputLength} />
        {this.state.inputArr.map(val => {
          return <Char char={val} />
        })}
      </div>
    );
  };

}





export default App;
