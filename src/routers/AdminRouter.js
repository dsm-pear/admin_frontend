import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminLogin, NoticeView, NoticeWrite, Question, ApproveList, ViewReport } from './index';

const AdminRouter = () => {
  return (
      <Switch>
        <Route exact path='/' component={ AdminLogin } />
        <Route path='/question' component={ Question } />
        <Route path='/notice-write' component={ NoticeWrite } />
        <Route path='/notice' component={ NoticeView } />
        <Route path='/approve' component={ ApproveList } />
        <Route path='/view-report' component={ ViewReport } />
      </Switch>
  );
};

export default AdminRouter;