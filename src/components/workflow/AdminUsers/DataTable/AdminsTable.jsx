import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { DataGrid } from '@material-ui/data-grid';

import Button from '@material-ui/core/Button';
import CustomDialog from '../../Dialog/Dialog';

import { FormStyleMake } from '../../../auth/Style/FormStyle';
import TableStyle from '../../Defects/TableStyle';
import { withStyles } from '@material-ui/core/styles';

import TableTools from './TableTools';
import { LoadingOverlay } from '../../TableComponents/Overlay';

import SetNewPassword from '../CRUD/SetNewPassword';

function RenderSetNewPassword(props) {
	RenderSetNewPassword.propTypes = {
		value: PropTypes.object,
	};
	const classes = FormStyleMake();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			{open ? (
				<CustomDialog
					title={'Set new Password'}
					form={
						<SetNewPassword data={props.value.row} setOpenState={setOpen} />
					}
					open={open}
					setOpenState={setOpen}
				/>
			) : null}
			<Button
				aria-controls='fade-menu'
				aria-haspopup='true'
				onClick={handleOpen}
				className={`${classes.description} ${classes.smallButton}`}
			>
				Set new Password
			</Button>
		</div>
	);
}

const columns = [
	{
		field: 'id',
		headerName: '#id',
		width: 100,
	},
	{
		field: 'firstName',
		headerName: 'First Name',
		width: 150,
	},
	{
		field: 'lastName',
		headerName: 'Last Name',
		width: 150,
	},
	{
		field: 'email',
		headerName: 'Email Address',
		width: 250,
	},
	{
		field: 'password',
		headerName: 'Password',
		width: 250,
		// eslint-disable-next-line react/display-name
		renderCell: (params) => <RenderSetNewPassword value={params} />,
	},
];

class AdminUsersTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectionModel: [],
			page: 0,
			rows: [],
			loading: true,
		};
	}
	componentDidMount() {
		this._isMounted = true;
		axios
			.get(`https://digichlistbackend.herokuapp.com/api/admin`)
			.then((res) => {
				if (this._isMounted) {
					const admins = res.data;
					this.setState({ rows: admins });
					this.setState({ loading: false });
				}
			});
	}
	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.fixedHeightFullSize}>
				<DataGrid
					className={classes.dataTable}
					rows={this.state.rows}
					columns={columns}
					checkboxSelection
					onSelectionModelChange={(newSelection) => {
						this.setState({ selectionModel: newSelection.selectionModel });
					}}
					page={this.state.page}
					onPageChange={(params) => {
						this.setState({ page: params.page });
					}}
					pageSize={13}
					loading={this.state.loading}
					disableSelectionOnClick
					rowsPerPageOptions={[13, 20, 50]}
					selectionModel={this.state.selectionModel}
					components={{
						Toolbar: () =>
							TableTools(this.state.selectionModel, this.state.rows),
						LoadingOverlay: LoadingOverlay,
					}}
				/>
			</div>
		);
	}
}

AdminUsersTable.propTypes = {
	data: PropTypes.array,
	classes: PropTypes.object,
};

export default withStyles(TableStyle, { withTheme: true })(AdminUsersTable);
