import React from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormStyle from '../../../auth/Style/FormStyle';
import { withStyles } from '@material-ui/core/styles';

import { Formik } from "formik";
import * as Yup from "yup";

class AddAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {
                    id: 0,
                    name: 'Admin'
                },
                {
                    id: 1,
                    name: 'SuperAdmin'
                }
            ]
        }
    }
    render() {
        const { classes } = this.props
        const menuItem = this.state.menuItems
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    accessLevel: 'Admin'
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('Required'),
                    lastName: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .matches(/(?=.*[0-9])/, "Password must contain a number.")
                        .required('Password is required'),
                })}
                onSubmit={async (values) => {
                    console.log(values);
                    await fetch(`https://digichlistbackend.herokuapp.com/api/admin`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                            },
                            body: JSON.stringify({
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                password: values.password,
                                accessLevel: values.accessLevel,
                            })
                        }
                    ).then((response) => (response.ok === true ? location.reload() : null));
                }}
            >
                {function (formik) {
                    return (
                        <form onSubmit={formik.handleSubmit} className={classes.form}>
                            <div>
                                <MuiDialogContent dividers>
                                    <TextField
                                        error={formik.errors.firstName == 'Required'}
                                        className={classes.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.firstName}
                                        {...formik.getFieldProps('firstName')}
                                        fullWidth
                                        size="small"
                                        label="First name"
                                        type="name"
                                        id="firstName"
                                    />
                                    <TextField
                                        error={formik.errors.lastName == 'Required'}
                                        className={classes.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.lastName}
                                        {...formik.getFieldProps('lastName')}
                                        fullWidth
                                        size="small"
                                        label="Last name"
                                        type="name"
                                        id="LastName"
                                    />
                                    <TextField
                                        error={formik.errors.email == 'Invalid email'}
                                        className={classes.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.email}
                                        {...formik.getFieldProps('email')}
                                        fullWidth
                                        size="small"
                                        label="Email Address"
                                        type="email"
                                        id="email"
                                    />
                                    <TextField
                                        error={formik.errors.password == 'Password must be at least 6 characters'}
                                        className={classes.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.password}
                                        {...formik.getFieldProps('password')}
                                        fullWidth
                                        size="small"
                                        label="Password"
                                        type="password"
                                        id="password"
                                    />
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        className={`${classes.formControl} ${classes.formInput}`}>
                                        <InputLabel id="outlined-label">Access Level</InputLabel>
                                        <Select
                                            labelId="outlined-label"
                                            label="Access Level"
                                            {...formik.getFieldProps('accessLevel')}
                                        >
                                            {menuItem.map((params, index) => {
                                                const { name, id } = params
                                                return (
                                                    <MenuItem key={index} value={name}>
                                                        {name}
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </MuiDialogContent>
                                <MuiDialogActions>
                                    <Button
                                        size="small"
                                        className={classes.submitBtn}
                                        type="submit"
                                        disableRipple
                                        variant="contained">
                                        Add
                                    </Button>
                                </MuiDialogActions>
                            </div>
                        </form>
                    )
                }}
            </Formik>

        )
    }
}

AddAdmin.propTypes = {
    classes: PropTypes.object,
}

export default withStyles(FormStyle, { withTheme: true })(AddAdmin)