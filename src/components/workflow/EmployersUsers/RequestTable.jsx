import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { LoadingOverlay } from '../TableComponents/Overlay';

import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormStyle, { FormStyleMake } from '../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

import { DeleteString } from '../RequestHelper';

import AcceptRequest from './CRUD/AcceptRequest';
import CustomDialog from '../Dialog/Dialog';
import RequestToolBar from './RequestToolBar';

function RequestAction(props) {
	const { context } = props;
	const denyData = [context.row];
	const classes = FormStyleMake();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleDeny = async (e) => {
		e.preventDefault();
		console.log(denyData);
		await fetch(
			`https://digichlistbackend.herokuapp.com/DeleteUsers${DeleteString(
				denyData
			)}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		).then((response) => (response.ok === true ? location.reload() : null));
	};

	return (
		<div>
			{open ? (
				<CustomDialog
					title={'Accept registered request'}
					form={<AcceptRequest data={context.row} setOpenState={setOpen} />}
					open={open}
					setOpenState={setOpen}
				/>
			) : null}
			<form onSubmit={handleDeny}>
				<ButtonGroup disableElevation variant='contained' color='primary'>
					<Button
						variant='contained'
						color='primary'
						size='small'
						className={classes.submitBtn}
						style={{ marginLeft: 16 }}
						onClick={handleOpen}
					>
						Accept
					</Button>
					<Button
						variant='contained'
						color='primary'
						type='submit'
						size='small'
						className={`${classes.submitBtn} ${classes.cancelBtn}`}
					>
						Deny
					</Button>
				</ButtonGroup>
			</form>
		</div>
	);
}
RequestAction.propTypes = {
	context: PropTypes.object,
};

const columns = [
	{
		field: 'id',
		headerName: '#id',
		width: 85,
	},
	{
		field: 'firstName',
		headerName: 'Firs Name',
		width: 145,
	},
	{
		field: 'lastName',
		headerName: 'Last Name',
		width: 145,
	},
	{
		field: 'isRegistered',
		headerName: 'Action',
		width: 160,
		// eslint-disable-next-line react/display-name
		renderCell: (params) => <RequestAction context={params} />,
	},
];
class RequestTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [],
			selectionModel: [],
			page: 0,
			loading: true,
		};
	}
	componentDidMount() {
		this._isMounted = true;
		axios
			.get(
				`https://digichlistbackend.herokuapp.com/api/users/GetUnregisteredUsers`
			)
			.then((res) => {
				if (this._isMounted) {
					const persons = res.data;
					this.setState({ rows: persons });
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
			<div className={classes.fixedHeightTable}>
				<DataGrid
					className={classes.dataGrid}
					rows={this.state.rows}
					columns={columns}
					page={this.state.page}
					onPageChange={(params) => {
						this.setState({ page: params });
					}}
					components={{
						Toolbar: RequestToolBar,
						LoadingOverlay: LoadingOverlay,
					}}
					pageSize={14}
					loading={this.state.loading}
					pagination
					onSelectionModelChange={(newSelection) => {
						this.setState({ selectionModel: newSelection.selectionModel });
					}}
					selectionModel={this.state.selectionModel}
				/>
			</div>
		);
	}
}

RequestTable.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(FormStyle, { withTheme: true })(RequestTable);
