import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import JobsPost from './screens/JobsPost';
import PostJob from './screens/PostJob';
import Logout from './screens/Logout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Dashboard images={true}/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/resetpassword'>
            <ResetPassword />
          </Route>
          <Route path='/forgotpassword'>
            <ForgotPassword />
          </Route>
          <Route path='/Jobspost'>
            <JobsPost />
          </Route>
          <Route path='/postjob'>
            <PostJob/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
