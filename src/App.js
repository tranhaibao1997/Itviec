import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import JobDetails from './components/JobDetails';
import PrivateRoute from './components/PrivateRoute'
import NotFound from './components/NotFound'
function App() {
  let [user, setUser] = useState({ isAuthenticated: false })
  return (
    <Router>
      <>
        <div className="App">
          <NavBar></NavBar>
          <Switch>

            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/login" render={props => <Login setUser={setUser} {...props}></Login>}></Route>
            <PrivateRoute exact path="/jobs/:id" component={JobDetails}></PrivateRoute>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

      </>
    </Router>
  );
}

export default App;
