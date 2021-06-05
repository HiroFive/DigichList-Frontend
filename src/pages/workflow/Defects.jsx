/* eslint-disable react/prop-types */
import React from 'react';
import DefectsTable from '../../components/workflow/Defects/DefectsTable';

import WorkflowStyle from "../../components/workflow/WorkflowStyle";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const data = [
  {
    id: 1,
    title: 'df.',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo1',
    decides: 'Some dude',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 2,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo2',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 3,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo3',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 4,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo4',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 8,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'd',
    send: 'Misha Mischo5',

    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 9,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'd',
    send: 'Misha Mischo6',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 10,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'd',
    send: 'Misha Mischo7',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 11,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo8',

    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 12,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo9',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 5,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo10',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 6,
    title: 'ds.',
    state: 'Open',
    room: 47,
    decides: 'Some dude11',
    send: 'Misha Mischo',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd',
  },
  {
    id: 7,
    title: 'd',
    state: 'Open',
    room: 47,
    decides: 'Some dude',
    send: 'Misha Mischo12',
    description: 'dsakdasdjaksjdlkashda dahd hasd hashd aishd ashdhadhai dhaihd'
  },
]

function Defects(props) {
  const {classes} = props
  return (
    <Paper className={classes.paper}>
      <strong>Defects</strong>
      <DefectsTable data={data} />
    </Paper>

  )
}
export default withStyles(WorkflowStyle,{ withTheme: true })(Defects)