import React from "react";
import DashboardSidebarNavigation from "./dashboard-sidebar-navigation";
import { Grid } from "@material-ui/core";

const Dashboard = ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation />
      {children}
    </Grid>
  );
};

export default Dashboard;
