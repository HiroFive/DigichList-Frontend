/* eslint-disable react/prop-types */
import React from 'react'
import RequestTable from '../../components/workflow/EmployersUsers/RequestTable'
import EmployersTable from '../../components/workflow/EmployersUsers/EmployersTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class WorkerUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={8}>
                    <Paper className={fixedHeightPaper}>
                        <strong>Employees Users</strong>
                        <EmployersTable/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        <strong>Registered requests</strong>
                        <RequestTable />
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

export default withStyles(WorkflowStyle, { withTheme: true })(WorkerUsers)