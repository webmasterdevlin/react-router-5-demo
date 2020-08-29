import React from "react";
import { Route, Switch } from "react-router-dom";
import Games from "./pages/game/Games";
import GameDetails from "./pages/game/GameDetails";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./dashboard/Dashboard";

const Router = () => {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} exact />
      <Route path={"/games"} component={Games} />
      <Route path={"/game-details/:id"} component={GameDetails} />
      <Dashboard />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
export default Router;
