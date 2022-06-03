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
            <NavLink to="/">
            <h1 className='App-title'>Prime Pizza</h1>
            </NavLink>
            <NavLink to="/About">
              <h3 >About</h3>
            </NavLink>
          </nav>
        </header>
        <Route path='/' exact>
          <img id="logo" src='images/logo.png' />
          <h1>We hate pizza!</h1>
          <div>
         Instagram: @Pizza29
         <br />
         Facebook: Pizza29
         <br />
         Snapchat: Pizza29
        </div>

        </Route>

        <Route path="/PizzaMenu" exact>
          <PizzaMenu />
        </Route>
        <Route path="/CheckoutItem" exact>
          <CheckoutItem />
        </Route>

        <Route path="/About">
          <About />
        </Route>
        <Route path="/CostumerInfo" >
          <CostumerInfo />
        </Route>
       

      </Router>
    </div>
  );
}

export default App;


// need:
// next button at the end of checkout
// total bill
// food quantity
// post formatted to have all the info
// admin page