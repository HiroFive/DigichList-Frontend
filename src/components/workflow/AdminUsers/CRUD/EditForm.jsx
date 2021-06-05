import React from 'react'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import { FormStyleMake } from '../../../auth/Style/FormStyle';

import { Formik } from "formik";
import * as Yup from "yup";

const EditAdmin = (props) => {
    const styles = FormStyleMake()
    return (<div>
        { props.data.length < 2 && props.data.length !== 0 ? (
            <Formik
                initialValues={{
                    firstName: props.data[0].firstName,
                    lastName: props.data[0].lastName,
                    email: props.data[0].email,
                    password: props.data[0].password,
                }}
                validationSchema={Yup.object().shape({
                    Name: Yup.string()
                        .min(2, 'Too Short!')
                        .max(20, 'Too Long!')
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
                        <form onSubmit={formik.handleSubmit} className={styles.form}>
                            <div>
                                <MuiDialogContent dividers>
                                    <TextField
                                        error={formik.errors.fullName == 'Too Long!' || formik.errors.fullName == 'Too Short!'}
                                        className={styles.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.fullName}
                                        {...formik.getFieldProps('firstName')}
                                        fullWidth
                                        size="small"
                                        label="First name"
                                        type="name"
                                        id="firstName"
                                    />
                                    <TextField
                                        error={formik.errors.fullName == 'Too Long!' || formik.errors.fullName == 'Too Short!'}
                                        className={styles.formInput}
                                        variant="outlined"
                                        margin="normal"
                                        helperText={formik.errors.fullName}
                                        {...formik.getFieldProps('lastName')}
                                        fullWidth
                                        size="small"
                                        label="Last name"
                                        type="name"
                                        id="LastName"
                                    />
                                    <TextField
                                        error={formik.errors.email == 'Invalid email'}
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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
                                </MuiDialogContent>
                                <MuiDialogActions>
                                    <Button
                                        size="small"
                                        className={styles.submitBtn}
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
            <div className={styles.form}>
                <MuiDialogContent dividers className={styles.size}>
                    <div className={styles.primary}>Please select one row</div>
                </MuiDialogContent>
            </div>
        )}
    </div>
    )
}

EditAdmin.propTypes = {
    data: PropTypes.array,
}

export default EditAdmin