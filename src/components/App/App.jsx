import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import './App.css';
import PizzaMenu from '../Menu/Menu';
import About from '../About/about';

function App() {
  const history = useHistory();

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h3>
            <NavLink to="/PizzaMenu">Menu</NavLink>
          </h3>
          <h3>
            <NavLink to="/About">About</NavLink>
          </h3>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Route path='/' exact>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        </Route>

        <Route path="/PizzaMenu" exact>
          <PizzaMenu />
        </Route>

        <Route path="/About">
          <About />
        </Route>

      </Router>
    </div>
  );
}

export default App;
