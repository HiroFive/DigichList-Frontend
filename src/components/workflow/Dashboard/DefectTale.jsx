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
				{ name: 'createdAt', title: 'Created At' },
			],
			defaultColumnWidths: [
				{ columnName: 'id', width: 80 },
				{ columnName: 'description', width: 340 },
				{ columnName: 'roomNumber', width: 150 },
				{ columnName: 'createdAt', width: 150 },
				{ columnName: 'defectStatus', width: 100 },
				{ columnName: 'publisher', width: 200 },
			],
		};
	}
	componentDidMount() {
		this._isMounted = true;
		axios
			.get(`https://digichlistbackend.herokuapp.com/api/defect`)
			.then((res) => {
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
};
