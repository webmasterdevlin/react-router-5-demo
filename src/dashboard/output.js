import React from "react";
import { Route } from "react-router-dom";
import DashboardDefaultContent from "./dashboard-default-content";
import Inbox from "./inbox";
import SettingsAndPrivacy from "./settings-and-privacy";

const Output = ({ match }) => (
  <>
    <Route path={`${match.path}/`} component={DashboardDefaultContent} exact />
    <Route path={`${match.path}/inbox`} component={Inbox} />
    <Route
      path={`${match.path}/settings-and-privacy`}
      component={SettingsAndPrivacy}
    />
  </>
);

export default Output;
