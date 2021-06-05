import React from 'react';
import {TableStyleMake} from '../Defects/TableStyle';
import {
    GridOverlay,
} from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';


function LoadingOverlay() {
    const classes = TableStyleMake()
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress className={classes.loading} />
        </div>
      </GridOverlay>
    );
  }

export { LoadingOverlay }