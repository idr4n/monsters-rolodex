// import React, { Component } from 'react';
import React from 'react';
import './App.css';

// class App extends Component {
// or
class App extends React.Component {
  constructor() {
    super(); // calls Reac.Component's constructor
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
