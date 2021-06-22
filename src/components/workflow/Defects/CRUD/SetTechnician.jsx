import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

class SetTechnician extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItems: [],
			defectId: props.data.id,
			SelectedTechnician: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	async componentDidMount() {
		this._isMounted = true;
		await fetch(
			'https://digichlistbackend.herokuapp.com/api/users/GetTechnicians',
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		)
			.then((response) => response.json())

			.then((reqResponse) =>
				this.setState({
					menuItems: reqResponse.map((params) => {
						return {
							id: params.id,
							fullName: `${params.firstName} ${params.lastName}`,
							firstName: params.firstName,
							lastName: params.lastName,
						};
					}),
				})
			);
	}
	componentWillUnMount() {
		this._isMounted = false;
	}
	handleChange(event, newValue) {
		this.setState({ SelectedTechnician: newValue });
	}
	async handleSubmit(event) {
		event.preventDefault();
		if (this.state.SelectedTechnician == '') {
			this.props.setOpenState(false);
		} else {
			await fetch(
				`https://digichlistbackend.herokuapp.com/api/defect?userId=${this.state.SelectedTechnician.id}&defectId=${this.state.defectId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			).then((response) => (response.ok === true ? location.reload() : null));
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<form onSubmit={this.handleSubmit} className={classes.form}>
				<div>
					<MuiDialogContent dividers className={classes.dialogContent}>
						<Autocomplete
							id='Fixes defect'
							options={this.state.menuItems}
							onChange={this.handleChange}
							getOptionLabel={(option) => option.fullName}
							size='small'
							className={`${classes.formControl} ${classes.formInput}`}
							fullWidth
							renderInput={(params) => (
								<TextField
									{...params}
									label='Fixes defect'
									variant='outlined'
								/>
							)}
							renderOption={(option) => {
								return <div>{option.fullName}</div>;
							}}
						/>
					</MuiDialogContent>
					<MuiDialogActions>
						<Button
							size='small'
							className={classes.submitBtn}
							type='submit'
							disableRipple
							variant='contained'
						>
							Save
						</Button>
					</MuiDialogActions>
				</div>
			</form>
		);
	}
}
SetTechnician.propTypes = {
	classes: PropTypes.object,
	data: PropTypes.object,
	setOpenState: PropTypes.func,
};
export default withStyles(FormStyle, { withTheme: true })(SetTechnician);
