import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import Header from './pages/Header';
import Home from './pages/Home';
import Show from './pages/Show';

// LOCAL IMAGES::
// import Erebus from './kittypics/erebus.jpg';
// import Kris from './kittypics/kris.jpg';
// import G1 from './kittypics/g1.jpeg';
// import Dre2 from './kittypics/dre2.jpeg';
// import Snoop2 from './kittypics/snoop2.jpeg';
// import Cupcake from './kittypics/cupcake.jpg';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  handleNewCat(newcat) {
    let { cats } = this.state
    cats = cats.push(newcat)
    this.setState({
      cats: cats
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
            <Router>
                <Switch>
                    <Route exact path="/cats" component={Cats} />
                    <Route exact path="/cats/new" render={(props) => <NewCat newcat={this.handleNewCat}/>} />
                    <Route exact path="/cats/:id" component={Show} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
