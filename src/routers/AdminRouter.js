import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminLogin from '../components/adminLogin/AdminLogin';
import Question from '../components/question/Question';
const AdminRouter = () => {
  return (
      <Switch>
        <Route path='/admin/login' component={AdminLogin} />
        <Route path='/admin/question' component={Question} />
      </Switch>
  );
};

export default AdminRouter;