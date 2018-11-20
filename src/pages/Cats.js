import React, { Component } from 'react';
import '../App.css';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getCats } from '../api';

class Cats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.state.cats.map((cat, index) =>{
                return (
                <ListGroupItem
                    href={'/cats/' + cat.id}
                    key={index}
                    header={
                      <h4>
                        <span className='cat-name'>
                          {cat.name}
                        </span>
                      </h4>
                  }>
                  <br />
                </ListGroupItem>
                )
              })}
              </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentDidMount() {
    getCats()
    .then(APIcats => {
      this.setState({
        cats: APIcats
      })
    })
  }
}

export default Cats;
