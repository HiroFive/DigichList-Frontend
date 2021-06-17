/* eslint-disable react/prop-types */
import React from 'react';
import AdminsTable from '../../components/workflow/AdminUsers/DataTable/AdminsTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

function AdminUsers(props) {
    const {classes} = props
    return (
        <Paper className={classes.paper}>
            <strong>Admin Users</strong>
            <AdminsTable />
        </Paper>
    )
}

export default withStyles(WorkflowStyle,{ withTheme: true })(AdminUsers)