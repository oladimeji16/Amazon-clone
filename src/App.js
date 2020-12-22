import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './components/Navbar/Header'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h2>Login</h2>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
