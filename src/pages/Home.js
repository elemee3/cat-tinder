import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
    <div>
    <h3>Welcome to Cat Tinder!</h3>
    <br/>
    <a href="/cats"> Click here</a> to view all cats <br/><br/>
    <a href="/cats/new"> Click here</a> to create a new cat
    </div>
  )
  }
}

export default Home;
