import React, { Component } from 'react';
import '../App.css';
import { getCat } from '../api/index.js';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cat: undefined
    }
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
