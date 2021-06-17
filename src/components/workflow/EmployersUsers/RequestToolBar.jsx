import React from 'react';

import {
    GridToolbarContainer,
    GridFilterToolbarButton,
    GridToolbarExport,
} from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import {TableStyleMake} from '../Defects/TableStyle';

export default function CustomToolbar() {
    const classes = TableStyleMake()
    return (
        <GridToolbarContainer>
            <Grid container spacing={3}>
                <Grid item xs={5} md={9} lg={10}>
                    <GridFilterToolbarButton className={classes.toolButton} />
                    <GridToolbarExport className={classes.toolButton} />
                </Grid>
            </Grid>
        </GridToolbarContainer>
    );
}
