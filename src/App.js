import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminRouter from './routers/AdminRouter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={ AdminRouter } />
        </Switch>
      </Router>
    </>
  );
}

export default App;