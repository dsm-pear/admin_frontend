import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminLogin from '../components/adminLogin/AdminLogin';
import NoticeLook from '../components/notice/NoticeLook';
import Question from '../components/question/Question';
const AdminRouter = () => {
  return (
      <Switch>
        <Route path='/admin/login' component={AdminLogin} />
        <Route path='/admin/question' component={Question} />
        <Route path='/admin/notice' component={NoticeLook} />
      </Switch>
  );
};

export default AdminRouter;