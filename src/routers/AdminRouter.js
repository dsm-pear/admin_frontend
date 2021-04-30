import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  AdminLogin,
  NoticeView,
  NoticeWrite,
  Question,
  ApproveList,
  ViewReport,
  DetailNotice,
  DetailApprove,
  DetailReport,
  ModifyNotice,
} from './index';

const AdminRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={AdminLogin} />
      <Route exact path="/question" component={Question} />
      <Route exact path="/notice" component={NoticeWrite} />
      <Route exact path="/notice/view" component={NoticeView} />
      <Route exact path="/notice/view-notice/:id" component={DetailNotice} />
      <Route exact path="/notice/modify/:id" component={ModifyNotice} />
      <Route exact path="/approve" component={ApproveList} />
      <Route exact path="/approve/view-approve-report/:id" component={DetailApprove} />
      <Route exact path="/report" component={ViewReport} />
      <Route exact path="/report/view-report/:id" component={DetailReport} />
    </Switch>
  );
};

export default AdminRouter;
