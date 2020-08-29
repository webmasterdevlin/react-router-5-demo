import React from "react";
import { Route } from "react-router-dom";
import DashboardDefaultContent from "./dashboard-default-content";
import Inbox from "./inbox";
import SettingsAndPrivacy from "./settings-and-privacy";

const Output = ({ path }) => (
  <>
    <Route path={`${path}/`} component={DashboardDefaultContent} exact />
    <Route path={`${path}/inbox`} component={Inbox} />
    <Route
      path={`${path}/settings-and-privacy`}
      component={SettingsAndPrivacy}
    />
  </>
);

export default Output;
