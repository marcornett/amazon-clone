import React, { useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Checkout from './Components/Checkout/Checkout'
import Payment from './Components/Payment/Payment'
import Orders from './Components/Orders/Orders'
import { useStateValue } from './ContextAPI/StateProvider'
import { auth } from './Firebase/firebase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'



function App() {
  const stripePromise = loadStripe(
    'pk_test_51HsttbDX941wjKlxV86OIIIlwYu6qQKt4gBoPjfRSocVAGquOq1SSkhZLmqgRxZq05CLrpTJVigqPMupYYdSrTeq00aFKEn3g5'
  )
  const [state, dispatch] = useStateValue()
  const stableDispatch = useCallback(dispatch, [state.user, dispatch])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        stableDispatch({
          type: 'SET_USER',
          payload: authUser
        })
      } else {
        // user logged out
        stableDispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })

    return () => {
      // useEffect clean area
      console.log('detached')
      unsubscribe()
    }
  }, [stableDispatch,])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
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
