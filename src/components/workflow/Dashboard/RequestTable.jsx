import React from 'react';
import { GroupingState, IntegratedGrouping } from '@devexpress/dx-react-grid';
import { Grid, VirtualTable, TableHeaderRow, TableGroupRow, TableColumnResizing } from '@devexpress/dx-react-grid-material-ui';
import "../../../styles/workflow/dashboard.scss";

const data = [
  {
    id: 1,
    title: 'df.',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 34,
  },
  {
    id: 2,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 14,
  },
  {
    id: 3,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 12,
  },
  {
    id: 4,
    title: 'sd.',
    state: 'Fixing',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 31,
  },
  {
    id: 5,
    title: 'sd.',
    state: 'Solved',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 1,
  },
  {
    id: 6,
    title: 'ds.',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 5,
  },
  {
    id: 7,
    title: 'd',
    state: 'Open',
    room: 47,
    send: 'Misha Mischo',
    openDate: `${new Date()}`,
    closeDate: `${new Date()}`,
    solved: 4,
  },
];

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      columns: [
        { name: 'id', title: '#id' },
        { name: 'title', title: 'Title' },
        { name: 'room', title: 'Room' },
        { name: 'state', title: 'State' },
        { name: 'send', title: 'Send' },
        { name: 'openDate', title: 'Open Date' },
        { name: 'closeDate', title: 'Close Date' },
      ],
      defaultColumnWidths: [
        { columnName: 'id', width: 75 },
        { columnName: 'title', width: 180 },
        { columnName: 'room', width: 85 },
        { columnName: 'state', width: 100 },
        { columnName: 'send', width: 160 },
        { columnName: 'openDate', width: 260 },
        { columnName: 'closeDate', width: 260 },
      ]
    }
  }

  render() {
    return (
      <div className='request-table'>
        <Grid
          rows={data}
          columns={this.state.columns}
        >
          <GroupingState
            grouping={[{ columnName: 'state' }]}
          />
          <IntegratedGrouping />
          <VirtualTable height='325px' />
          <TableColumnResizing defaultColumnWidths={this.state.defaultColumnWidths} />
          <TableHeaderRow />
          <TableGroupRow />
        </Grid>
      </div>

    )
  }
}