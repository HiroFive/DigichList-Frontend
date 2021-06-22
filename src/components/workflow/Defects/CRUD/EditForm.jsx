import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

import { Formik } from 'formik';
import * as Yup from 'yup';

class EditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			technician: [],
			fixesDefect: {},
			menuItems: [
				{
					value: 'Opened',
					label: 'Opened',
				},
				{
					value: 'Fixing',
					label: 'Fixing',
				},
				{
					value: 'Solved',
					label: 'Solved',
				},
			],
			loading: true,
		};
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
			.then((reqResponse) => {
				this.setState({
					technician: reqResponse.map((params) => {
						return {
							id: params.id,
							fullName: `${params.firstName} ${params.lastName}`,
							firstName: params.firstName,
							lastName: params.lastName,
						};
					}),
				});
				this.state.technician.forEach((params) => {
					if (params.fullName === this.props.data[0].userThatFixesDefect) {
						this.setState({ fixesDefect: params });
					}
				});
			});
		this.setState({ loading: false });
	}
	componentWillUnMount() {
		this._isMounted = false;
	}
	render() {
		const { classes } = this.props;
		const { menuItems, fixesDefect, technician } = this.state;
		const handleChange = (event, newValue) => {
			this.setState({ fixesDefect: newValue });
		};
		return (
			<>
				{this.state.data.length < 2 && !this.state.loading ? (
					<Formik
						initialValues={{
							id: this.state.data[0].id,
							roomNumber: this.state.data[0].roomNumber,
							defectStatus: this.state.data[0].defectStatus,
							publisher: this.state.data[0].publisher,
							openDate: this.state.data[0].createdAt,
							closeDate: '',
							description: this.state.data[0].description,
							assignedWorkerId: this.state.fixesDefect,
						}}
						validationSchema={Yup.object().shape({
							roomNumber: Yup.string()
								.max(5, 'Too long, we do not have this room in hotel!')
								.required('Required'),
							description: Yup.string().required('Required'),
							defectStatus: Yup.string().required('Required'),
						})}
						onSubmit={async (values) => {
							values.assignedWorkerId = fixesDefect.id;
							await fetch(
								`https://digichlistbackend.herokuapp.com/api/defect/UpdateDefect`,
								{
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										Accept: 'application/json',
									},
									body: JSON.stringify({
										id: values.id,
										description: values.description,
										roomNumber: values.roomNumber,
										defectStatus: values.defectStatus,
										assignedWorkerId: values.assignedWorkerId,
									}),
								}
							).then((response) =>
								response.ok === true ? location.reload() : null
							);
						}}
					>
						{function (formik) {
							return (
								<form onSubmit={formik.handleSubmit} className={classes.form}>
									<div>
										<MuiDialogContent
											dividers
											className={classes.dialogContent}
										>
											<TextField
												error={formik.errors.description == 'Required'}
												className={classes.formInput}
												id='outlined-textarea'
												label='Description'
												multiline
												helperText={formik.errors.description}
												{...formik.getFieldProps('description')}
												rowsMax={4}
												margin='normal'
												size='small'
												fullWidth
												variant='outlined'
											/>

											<TextField
												error={formik.errors.roomNumber == 'Required'}
												className={classes.formInput}
												variant='outlined'
												margin='normal'
												helperText={formik.errors.roomNumber}
												{...formik.getFieldProps('roomNumber')}
												fullWidth
												size='small'
												label='Room Number'
												type='number'
												id='roomNumber'
											/>

											<Autocomplete
												id='Fixes defect'
												options={technician}
												value={fixesDefect}
												onChange={handleChange}
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
											/>

											<FormControl
												variant='outlined'
												size='small'
												fullWidth
												className={`${classes.formControl} ${classes.formInput}`}
											>
												<InputLabel id='demo-simple-select-outlined-label'>
													Status
												</InputLabel>
												<Select
													labelId='demo-simple-select-outlined-label'
													label='Status'
													{...formik.getFieldProps('defectStatus')}
												>
													{menuItems.map((params, index) => {
														const { value } = params;
														return (
															<MenuItem key={index} value={value}>
																{value}
															</MenuItem>
														);
													})}
												</Select>
											</FormControl>
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
						}}
					</Formik>
				) : (
					<div className={classes.form}>
						<MuiDialogContent dividers className={classes.size}>
							<div className={classes.primary}>Please select one row</div>
						</MuiDialogContent>
					</div>
				)}
			</>
		);
	}
}

EditForm.propTypes = {
	data: PropTypes.array,
	classes: PropTypes.object,
};
export default withStyles(FormStyle, { withTheme: true })(EditForm);
