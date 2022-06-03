import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import './App.css';
import PizzaMenu from '../Menu/Menu';
import About from '../About/about';
import CostumerInfo from "../CustomerInfo/CustomerInfo"
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
          </nav>
        </header>
        <Route path='/' exact>
          <img id="logo" src='images/logo.png' />
          <h1>We hate pizza!</h1>

        </Route>

        <Route path="/PizzaMenu" exact>
          <PizzaMenu />
          <h3>
            <NavLink to="/CostumerInfo" exact>
              NEXT
            </NavLink>
          </h3>
        </Route>

        <Route path="/About">
          <About />
        </Route>
        <Route path="/CostumerInfo" >
          <CostumerInfo />
        </Route>
        <div>
         Instagram: @ShitPizza29
         <br />
         Facebook: ShitPizza29
         <br />
         Snapchat: @ShitPizza29
        </div>

      </Router>
    </div>
  );
}

export default App;
