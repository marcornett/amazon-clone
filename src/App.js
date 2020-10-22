import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Checkout from './Components/Checkout/Checkout'
import { useStateValue } from './ContextAPI/StateProvider'
import { auth } from './Firebase/firebase'

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
