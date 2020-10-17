import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Checkout from './Checkout'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function App() {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          payload: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })

    return () => {
      // useEffect clean area
      unsubscribe()
    }
  }, [])

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
