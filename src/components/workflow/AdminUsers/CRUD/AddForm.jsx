import React from 'react'
import Button from '@material-ui/core/Button';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { FormStyleMake } from '../../../auth/Style/FormStyle';

import { Formik } from "formik";
import * as Yup from "yup";

const AddAdmin = () => {
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string()
                    .min(5, 'Too Short!')
                    .max(50, 'Too Long!')
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
                const styles = FormStyleMake()
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
                                    {...formik.getFieldProps('fullName')}
                                    fullWidth
                                    size="small"
                                    label="Full name"
                                    type="name"
                                    id="fullName"
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

export default AddAdmin