import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

   <div className="App">

      <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/Signup" component={Signup} />
     </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
