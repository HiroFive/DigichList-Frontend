/* eslint-disable react/prop-types */
import React from 'react';
import DefectsTable from '../../components/workflow/Defects/DefectsTable';

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

function Defects(props) {
  const {classes} = props
  return (
    <Paper className={classes.paper}>
      <strong>Defects</strong>
      <DefectsTable />
    </Paper>

  )
}
export default withStyles(WorkflowStyle,{ withTheme: true })(Defects)