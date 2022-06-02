import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import './App.css';
import PizzaMenu from '../Menu/Menu';
import About from '../About/about';
import CostumerInfo from "../CustomerInfo/CustomerInfo"
import CheckoutItem from '../CheckoutItem/CheckoutItem';

function App() {
  const history = useHistory();

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <nav id='navbar'>
            <NavLink to="/PizzaMenu">
              <h3>Order here!</h3>
            </NavLink>
            <h1 className='App-title'>Prime Pizza</h1>
            <NavLink to="/About">
              <h3 >About</h3>
            </NavLink>
            <h3>
              <NavLink to="/CheckoutItem">Checkout</NavLink>
            </h3>
          </nav>

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
        <Route path="/CostumerInfo" >
          <CostumerInfo />
        </Route>
        <Route path="/CheckoutItem" >
          <CheckoutItem />
        </Route>
        <h3>
          <NavLink to="/CostumerInfo">NEXT</NavLink>
        </h3>

      </Router>
    </div>
  );
}

export default App;
