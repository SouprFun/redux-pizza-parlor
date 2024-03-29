import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    console.log('in pizza reducer', state, action)

      if( action.type === 'DISPLAY_MENU'){
        return action.payload
    }
     
    return state
};

const cartReducer = (state = [], action) => {
    console.log('in cart reducer', state, action)

    if(action.type === 'ADD_PIZZA'){
        return [...state, action.payload ]
     }
     else if(action.type === 'DELETE_CART'){
         return []
     }  
    return state
};

const customerReducer =( state ={}, action)=>{
    console.log('in customer reducer', state, action)

    if(action.type === 'CUSTUMER_INFO'){
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        pizza : pizzaReducer,
        customer: customerReducer,
        cart: cartReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={storeInstance}>
<App />
</Provider>,


document.getElementById('root'));
