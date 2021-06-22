import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

import { Formik } from 'formik';
import * as Yup from 'yup';

class EditAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			selectedId: this.props.data[0].id,
			menuItems: [
				{
					id: 0,
					name: 'Admin',
				},
				{
					id: 1,
					name: 'SuperAdmin',
				},
			],
		};
	}
	render() {
		const { classes } = this.props;
		const menuItem = this.state.menuItems;
		return (
			<>
				{this.state.data.length < 2 && this.state.data.length !== 0 ? (
					<Formik
						initialValues={{
							firstName: `${this.state.data[0].firstName}`,
							lastName: this.state.data[0].lastName,
							email: this.state.data[0].email,
							accessLevel: this.state.data[0].accessLevel,
						}}
						validationSchema={Yup.object().shape({
							firstName: Yup.string().required('Required'),
							lastName: Yup.string().required('Required'),
							email: Yup.string()
								.email('Invalid email')
								.required('Email is required'),
						})}
						onSubmit={async (values) => {
							await fetch(
								`https://digichlistbackend.herokuapp.com/api/admin/UpdateAdmin`,
								{
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										Accept: 'application/json',
									},
									body: JSON.stringify({
										id: this.state.selectedId,
										firstName: values.firstName,
										lastName: values.lastName,
										email: values.email,
										accessLevel: values.accessLevel,
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
										<MuiDialogContent dividers>
											<TextField
												className={classes.formInput}
												variant='outlined'
												margin='normal'
												helperText={formik.errors.firstName}
												{...formik.getFieldProps('firstName')}
												fullWidth
												size='small'
												label='First name'
												type='name'
												id='firstName'
											/>
											<TextField
												className={classes.formInput}
												variant='outlined'
												margin='normal'
												helperText={formik.errors.lastName}
												{...formik.getFieldProps('lastName')}
												fullWidth
												size='small'
												label='Last name'
												type='name'
												id='LastName'
											/>
											<TextField
												error={formik.errors.email == 'Invalid email'}
												className={classes.formInput}
												variant='outlined'
												margin='normal'
												helperText={formik.errors.email}
												{...formik.getFieldProps('email')}
												fullWidth
												size='small'
												label='Email Address'
												type='email'
												id='email'
											/>
											<FormControl
												variant='outlined'
												size='small'
												fullWidth
												className={`${classes.formControl} ${classes.formInput}`}
											>
												<InputLabel id='outlined-label'>
													Access Level
												</InputLabel>
												<Select
													labelId='outlined-label'
													label='Access Level'
													{...formik.getFieldProps('accessLevel')}
												>
													{menuItem.map((params, index) => {
														const { name } = params;
														return (
															<MenuItem key={index} value={name}>
																{name}
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

EditAdmin.propTypes = {
	data: PropTypes.array,
	classes: PropTypes.object,
};

export default withStyles(FormStyle, { withTheme: true })(EditAdmin);
