// import { useState } from 'react'
import React, { Component, lazy, Suspense, PureComponent } from "react";
// import logo from './logo.svg'

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css'

// const Login = lazy('./Pages/Login/Login.jsx')
import Login from './Pages/Login/Login.jsx';

import UploadImage from './Pages/UploadImage/UploadImage.jsx';

// const UploadImage = lazy('./Pages/UploadImage/UploadImage.jsx')

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router >
        
          <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/upload" component={UploadImage} />
          </Switch>
      
      </Router>
    </div>
  )
}

export default App
