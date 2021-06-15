import React from 'react'
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

import { Formik } from "formik";
import * as Yup from "yup";

class EditAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            selectedId: this.props.data[0].id,
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
            <>
                {this.state.data.length < 2 && this.state.data.length !== 0 ? (
                    <Formik
                        initialValues={{
                            firstName: this.state.data[0].firstName,
                            lastName: this.state.data[0].lastName,
                            email: this.state.data[0].email,
                            password: this.state.data[0].password,
                            accessLevel: this.state.data[0].accessLevel
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
                        onSubmit={values => {
                            console.log(values);
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
                                                Save
                                            </Button>
                                        </MuiDialogActions>
                                    </div>
                                </form>
                            )
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
        )
    }

}

EditAdmin.propTypes = {
    data: PropTypes.array,
    classes: PropTypes.object,
}

export default withStyles(FormStyle, { withTheme: true })(EditAdmin)