import React from "react";
import axios from "axios";

import { GroupingState, IntegratedGrouping } from "@devexpress/dx-react-grid";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableGroupRow,
  TableColumnResizing,
} from "@devexpress/dx-react-grid-material-ui";
import "../../../styles/workflow/dashboard.scss";

// const data = [
//   {
//     id: 1,
//     title: 'df.',
//     state: 'Open',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 34,
//   },
//   {
//     id: 2,
//     title: 'sd.',
//     state: 'Solved',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 14,
//   },
//   {
//     id: 3,
//     title: 'sd.',
//     state: 'Solved',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 12,
//   },
//   {
//     id: 4,
//     title: 'sd.',
//     state: 'Fixing',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 31,
//   },
//   {
//     id: 5,
//     title: 'sd.',
//     state: 'Solved',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 1,
//   },
//   {
//     id: 6,
//     title: 'ds.',
//     state: 'Open',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 5,
//   },
//   {
//     id: 7,
//     title: 'd',
//     state: 'Open',
//     room: 47,
//     send: 'Misha Mischo',
//     openDate: `${new Date()}`,
//     closeDate: `${new Date()}`,
//     solved: 4,
//   },
// ];

export default class RequestTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      columns: [
        { name: "id", title: "#id" },
        { name: "description", title: "Description" },
        { name: "roomNumber", title: "Room Number" },
        { name: "defectStatus", title: "Status" },
        { name: "publisher", title: "Publisher" },
      ],
      defaultColumnWidths: [
        { columnName: "id", width: 80 },
        { columnName: "description", width: 340 },
        { columnName: "roomNumber", width: 150 },
        { columnName: "defectStatus", width: 100 },
        { columnName: "publisher", width: 200 },
      ],
      loading: true,
    };
  }
  componentDidMount() {
    this._isMounted = true;
    axios.get(`https://digichlistbackend.herokuapp.com/api/defect`).then((res) => {
      const defect = res.data;
      this.setState({ rows: defect });
      this.setState({ loading: false });
    });
  }
  componentWillUnMount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="request-table">
        <Grid rows={this.state.rows} columns={this.state.columns}>
          <GroupingState grouping={[{ columnName: "defectStatus" }]} />
          <IntegratedGrouping />
          <VirtualTable height="325px" />
          <TableColumnResizing
            defaultColumnWidths={this.state.defaultColumnWidths}
          />
          <TableHeaderRow />
          <TableGroupRow />
        </Grid>
      </div>
    );
  }
}
