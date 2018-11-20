import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import { getCat, destroyCat } from '../api/index.js';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'PENDING',
      cat: undefined
    }
  }

  handleDestroy() {
    destroyCat(this.state.cat.id)
    .then( resp => this.setState({status: 'SUCCESS'}))
  }

  handleEdit() {

  }

  render() {
    let { cat } = this.state
    if (cat === undefined) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h2>{cat.name}, {cat.age} years old</h2>
          <h3>Enjoys: {cat.enjoys}</h3>
          <button>Edit</button>
          <button onClick={this.handleDestroy.bind(this)}>Destroy</button>
          {this.state.status === 'SUCCESS' && <Redirect to="/cats" />}
        </div>
      )
    }
  }

  componentWillMount() {
    const index = this.props.match.params.id
    console.log(index)
    console.log(getCat(index))
    getCat(index)
    .then(APIcat => {
      this.setState({
        cat: APIcat
      })
    })
  }
}

export default Show;
