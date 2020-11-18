import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AdminLogin, NoticeView, NoticeWrite, Question, ApproveList, ViewReport, DetailNotice, DetailApprove, DetailReport } from './index';

const AdminRouter = () => {
  return (
      <Switch>
        <Route exact path='/' component={ AdminLogin } />
        <Route path='/question' component={ Question } />
        <Route path='/notice-write' component={ NoticeWrite } />
        <Route exact path='/notice' component={ NoticeView } />
        <Route exact path='/notice/view-notice' component={ DetailNotice } />
        <Route exact path='/approve' component={ ApproveList } />
        <Route path='/approve/view-approve-report' component={ DetailApprove } />
        <Route exact path='/report' component={ ViewReport } />
        <Route path='/report/view-report' component={ DetailReport }/>
      </Switch>
  );
};

export default AdminRouter;