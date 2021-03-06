import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import ChangeTestForm from './changeTest.js';

function zmianaTekstu(){
    ReactDOM.render("wow!", document.getElementById("przycisk"));
}
const startingMessage = <h1>Hello World</h1>;
let preetyButton = <button onClick={zmianaTekstu} >Przycisk</button>
ReactDOM.render(startingMessage, document.getElementById("sampletext"));
ReactDOM.render(preetyButton, document.getElementById("przycisk"));

// list with key example
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
<li key={'person_' + i}>{person}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('listKey'));

// ------------------------------------------------------------------
// states change example
class Mood extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'good', color:'green' };
      this.toggleMood = this.toggleMood.bind(this); // niezbedne gdy event (tu onClick) uzywa "this"
    }
  
    toggleMood() {
      const newMood = this.state.mood == 'good' ? 'bad' : 'good';
      let newColor = this.state.color == 'green' ? 'red' : 'green';
      this.setState({ mood: newMood });
      this.setState({ color: newColor });
    }
  
    render() {
      return (
        <div style={{backgroundColor: this.state.color, transition: "ease", transitionDuration: 2+'s'}}>
          <h1>I'm feeling {this.state.mood}!</h1>
          <button onClick={this.toggleMood}>
            Click Me
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Mood />, document.getElementById('stateChangeExample'));

  // ------------------------------------------------------------------
  // constant update example
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    render() {
      return <div style={{fontSize: 50+'px'}}>{this.state.date.toLocaleTimeString()}</div>;
    }
    componentDidMount() {
      const oneSecond = 1000;
      this.intervalID = setInterval(() => {this.setState({ date: new Date()});}, oneSecond);
    }
    componentWillUnmount(){
      clearInterval(this.intervalID);
    }
  }
  
  ReactDOM.render(<Clock />, document.getElementById('clockExample'));

  // ------------------------------------------------------------------
  // show input value
  ReactDOM.render(<ChangeTestForm /> , document.getElementById('formValues'));