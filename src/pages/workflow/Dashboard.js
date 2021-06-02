import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import clsx from "clsx";

import ShowChart from '../../components/workflow/Dashboard/Chart';
import RequestTable from '../../components/workflow/Dashboard/RequestTable';
import BarChart from '../../components/workflow/Dashboard/BarChart';


export default function Dashboard() {
  const classes = WorkflowStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={8}>
        <Paper className={fixedHeightPaper}>
          <ShowChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper className={fixedHeightPaper}>
         <BarChart/>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
            <Grid item xs={12} md={4} lg={12}>
              <RequestTable />
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}