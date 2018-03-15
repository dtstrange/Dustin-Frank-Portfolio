import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Bio from './components/bio/Bio';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <div>
          <Navbar/>
            <Switch>
              <div className="container">
                <Route exact path="/" component={Bio}/>
                <Route exact path="/portfolio" component={Portfolio}/>
              </div>
            </Switch>  
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
