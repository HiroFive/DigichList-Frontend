/* eslint-disable react/prop-types */
import React from 'react';
import AdminsTable from '../../components/workflow/AdminUsers/DataTable/AdminsTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Jonson',
        email: 'jj244@gmail.com',
        registeredDate: new Date(),
        password: 'dsdsadasd3423423',
    },
    {
        id: 2,
        firstName: 'John2',
        lastName: 'Jonson2',
        email: 'jj2442@gmail.com',
        registeredDate: new Date(),
        password: 'dsdsadasd3423423',
    },
]

function AdminUsers(props) {
    const {classes} = props
    return (
        <Paper className={classes.paper}>
            <strong>Admin Users</strong>
            <AdminsTable data={data} />
        </Paper>
    )
}

export default withStyles(WorkflowStyle,{ withTheme: true })(AdminUsers)