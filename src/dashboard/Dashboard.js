import React from "react";
import DashboardSidebarNavigation from "./dashboard-sidebar-navigation";
import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import DashboardDefaultContent from "./dashboard-default-content";
import Inbox from "./inbox";
import SettingsAndPrivacy from "./settings-and-privacy";
import Output from "./output";
// import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Route
      path={"/dashboard"}
      render={({ match: { path } }) => (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <DashboardSidebarNavigation />
          <Output path={path} />
        </Grid>
      )}
    />
  );
};

export default Dashboard;
