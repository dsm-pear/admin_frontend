import React, { FC, ReactElement, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
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