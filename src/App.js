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
    console.log(this.state.inputArr);
  };

  charClickHandler = (event) => {
    const newInput = [...this.state.inputValue];
    const index = event.target.getAttribute("data-index");
    newInput.splice(index, 1)
    
    const newValue = newInput.join("");
    const newLength = this.state.inputLength - 1;
    this.setState({
      inputArr: newInput,
      inputValue: newValue,
      inputLength: newLength
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Second practice Task</h1>
        <input type="text" value={this.state.inputValue} onChange={(event) => this.inputChangeHandler(event)} />
        {this.state.inputLength > 0 ? <p>Text Length: {this.state.inputLength}</p> : null}
        <TextValidator length={this.state.inputLength} />
        <h3>Click to remove</h3>
        {this.state.inputArr.map((val, index) => {
          return <Char val={val} index={index} click={(event) => this.charClickHandler(event)} />
        })}
      </div>
    );
  };
}





export default App;
