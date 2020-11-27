import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // imports bootstrap into play
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; 


import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import DailyList from './components/dailyList.component.js';
// import Calendar from './components/calendar.component.js';
import Info from './components/info.component.js';

// now we have divide up our macro tracker app into components
// go forward with top-down design 

// use react-router-dom in order to route your components? 

// what do we need?, 
// We need to be able to add items to our macro tracker,
// and also add macros (fat, carbs, and protein grams) for each item 

class App extends Component {
  render() { 
    return (
      <Router> 
            <div className="container">
              <Navbar bg="dark" varint="dark">
                <Navbar.Brand href="/">Macro Tracker</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                    <Nav.Link href="/info">My Info</Nav.Link>
                  </Nav>
              </Navbar>
              <Switch> 
                <Route path="/" component={DailyList} />
                <Route path="/info" component={Info} />
              </Switch>
            </div> 
      </Router>
    );
  }
}

export default App;
