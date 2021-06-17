import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { GroupingState, IntegratedGrouping } from '@devexpress/dx-react-grid';
import {
	Grid,
	VirtualTable,
	TableHeaderRow,
	TableGroupRow,
	TableColumnResizing,
} from '@devexpress/dx-react-grid-material-ui';
import '../../../styles/workflow/dashboard.scss';

export default class RequestTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: this.props.data,
			columns: [
				{ name: 'id', title: '#id' },
				{ name: 'description', title: 'Description' },
				{ name: 'roomNumber', title: 'Room Number' },
				{ name: 'defectStatus', title: 'Status' },
				{ name: 'publisher', title: 'Publisher' },
			],
			defaultColumnWidths: [
				{ columnName: 'id', width: 80 },
				{ columnName: 'description', width: 340 },
				{ columnName: 'roomNumber', width: 150 },
				{ columnName: 'defectStatus', width: 100 },
				{ columnName: 'publisher', width: 200 },
			],
		};
	}
	render() {
		return (
			<div className='request-table'>
				<Grid rows={this.state.rows} columns={this.state.columns}>
					<GroupingState grouping={[{ columnName: 'defectStatus' }]} />
					<IntegratedGrouping />
					<VirtualTable height='325px' />
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
RequestTable.propTypes = {
  data: PropTypes.array.isRequired,
}