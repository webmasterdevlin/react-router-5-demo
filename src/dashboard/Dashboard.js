import React from "react";
import DashboardSidebarNavigation from "./dashboard-sidebar-navigation";
import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import Output from "./output";

const Dashboard = () => {
  return (
    <Route
      path={"/dashboard"}
      render={({ match }) => (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <DashboardSidebarNavigation match={match} />
          <Output match={match} />
        </Grid>
      )}
    />
  );
};

export default Dashboard;
