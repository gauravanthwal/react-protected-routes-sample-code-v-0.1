import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./coponents/Navbar";
import Home from "./coponents/Home";
import Register from './coponents/Register'
import Login from './coponents/Login'
import Products from './coponents/Products'
import Feeds from './coponents/Feeds'
import Protected from './coponents/Protected'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/products">
              <Protected Cmp={Products} />
            </Route>
            <Route exact path="/feeds">
              <Protected Cmp={Feeds} />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
