import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const promise = loadStripe('pk_test_51I0ZukBacOkbaJJMCyIHAMiS9XL9dPIuePOxcnI2AP4fpdu1xucS2fCz2wNBcqfr849jKK53PUT7FcSZS0rf74aQ00TkpOlcBf');

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        // The user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>


          <Route path="/login">

            <Login />
          </Route>


          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
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

