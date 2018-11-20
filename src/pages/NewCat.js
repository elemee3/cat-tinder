import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import { FormControl } from 'react-bootstrap';
import { newCat } from '../api/index';

class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: "LOADING",
      cat: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event) {
    let { cat } = this.state
    cat[event.target.name] = event.target.value
    this.setState({cat: cat})
  }

  handleNewCat(event) {
    let { cat } = this.state
    event.preventDefault()
    newCat(cat)
    .then(json => {
      console.log(json)
      this.setState({status: "SAVED"})
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div className="App">
          <FormControl
            type="text"
            name="name"
            placeholder="Enter Name Here"
            onChange={this.handleChange.bind(this)}
            value={this.state.cat.name}
          /><br/>
          <FormControl
            type="number"
            name="age"
            placeholder="Enter Age Here"
            onChange={this.handleChange.bind(this)}
            value={this.state.cat.age}
          /><br/>
          <FormControl
            name="enjoys"
            type="text"
            placeholder="Enter Activities Here"
            onChange={this.handleChange.bind(this)}
            value={this.state.cat.enjoys}
          /><br/>
          <FormControl
            type="submit"
            value="Add New Cat"
            onClick={this.handleNewCat.bind(this)}
          />
        {this.state.status === "SAVED" && <Redirect to="/cats" />}
      </div>
    );
  }
}

export default NewCat;
