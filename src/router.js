import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardDefaultContent from "./dashboard/dashboard-default-content";

import Games from "./pages/game/Games";
import GameDetails from "./pages/game/GameDetails";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./dashboard/Dashboard";
import Inbox from "./dashboard/inbox";
import SettingsAndPrivacy from "./dashboard/settings-and-privacy";

const Router = () => {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} exact />
      <Route path={"/games"} component={Games} />
      <Route path={"/game-details/:id"} component={GameDetails} />
      <Route
        path={"/dashboard"}
        render={({ match: { url, path } }) => (
          <Dashboard url={url}>
            <Route
              path={`${path}/`}
              component={DashboardDefaultContent}
              exact
            />
            <Route path={`${path}/inbox`} component={Inbox} />
            <Route
              path={`${path}/settings-and-privacy`}
              component={SettingsAndPrivacy}
            />
          </Dashboard>
        )}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
export default Router;
