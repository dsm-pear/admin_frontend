import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './components/adminLogin/AdminLogin';
import Header from './components/header/Header';
import Question from './components/question/Question';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/adminquestion" component={Question} />
        <Route exact path="/adminlogin" component={AdminLogin} />
      </Switch>
    </Router>
  );
}

export default App;