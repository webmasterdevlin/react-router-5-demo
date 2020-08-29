import React from "react";
import DashboardSidebarNavigation from "./dashboard-sidebar-navigation";
import { Grid } from "@material-ui/core";

const Dashboard = ({ url, children }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation url={url} />
      {children}
    </Grid>
  );
};

export default Dashboard;
