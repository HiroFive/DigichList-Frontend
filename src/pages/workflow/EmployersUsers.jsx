/* eslint-disable react/prop-types */
import React from 'react'
import axios from 'axios';

import RequestTable from '../../components/workflow/EmployersUsers/RequestTable'
import EmployersTable from '../../components/workflow/EmployersUsers/EmployersTable'

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const requestData = [
    {
        id: 1,
        firstName: 'Kolya',
        lastName: 'Bolya',
        role: 'Some worker',
        isRegistered: 1,
        date: 12,
    },
    {
        id: 2,
        firstName: 'Kolya',
        lastName: 'Bolya2',
        role: 'Some worker',
        isRegistered: 1,
        date: 32,
    },
    {
        id: 3,
        firstName: 'Kolya',
        lastName: 'Bolya3',
        isRegistered: 0,
        role: 'Some worker',
        date: 43,
    },
    {
        id: 4,
        firstName: 'Kolya',
        lastName: 'Bolya4',
        role: 'Some worker',
        isRegistered: 0,
        date: 43,
    },
    {
        id: 5,
        firstName: 'Kolya',
        lastName: 'Bolya5',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 6,
        firstName: 'Kolya',
        lastName: 'Bolya6',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 7,
        firstName: 'Kolya',
        lastName: 'Bolya7',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 8,
        firstName: 'Kolya',
        lastName: 'Bolya8',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 9,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 10,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 11,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 12,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 13,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 14,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },
    {
        id: 15,
        firstName: 'Kolya',
        lastName: 'Bolya9',
        role: 'Some worker',
        isRegistered: 1,
        date: 43,
    },

];

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
                <Grid item xs={12} md={8} lg={7}>
                    <Paper className={fixedHeightPaper}>
                        <strong>Employers Users</strong>
                        <EmployersTable/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={5}>
                    <Paper className={fixedHeightPaper}>
                        <strong>Registered requests</strong>
                        <RequestTable data={requestData} />
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

//TODO: #11 add lazy loading on dataGrids
export default withStyles(WorkflowStyle, { withTheme: true })(WorkerUsers)