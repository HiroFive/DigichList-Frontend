import React from 'react';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { ResetLink, FormCard } from '../../components/auth/FormElements';
import TextField from '@material-ui/core/TextField';
import FormStyle from '../../components/auth/FormStyle';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { login } from '../../contexts/auth/AuthContext'

import { Formik } from "formik";
import { CssBaseline } from '@material-ui/core';
import * as Yup from "yup";

const loginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Invalid email'),
            })}
            onSubmit={async values => {
                await login(values.email, values.password) 
            }}
        >
            {function (formik) {
                const styles = FormStyle()
                return (
                    <FormCard
                        icon={<LockOpenOutlinedIcon />}
                        title='Login in Admin panel'
                        components={
                            <form onSubmit={formik.handleSubmit}>
                                <CssBaseline />
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
                                    className={styles.formInput}
                                    variant="outlined"
                                    margin="normal"
                                    {...formik.getFieldProps('password')}
                                    fullWidth
                                    size="small"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                                <FormControlLabel
                                    className={styles.checkBoxLabel}
                                    control={<Checkbox
                                        className={styles.checkBox}
                                        disableRipple
                                        color='default'
                                        value="remember"
                                        checkedIcon={<span className={styles.icon, styles.checkedIcon} />}
                                        icon={<span className={styles.icon} />}
                                    />}
                                    label="Remember me"
                                />
                                <Button
                                    className={styles.submitBtn}
                                    type="submit"
                                    fullWidth
                                    disableRipple
                                    variant="contained">
                                    Login
                            </Button>
                                <ResetLink text='Forgot Password?' to='/forgot-password' />
                            </form>
                        }
                    />)
            }}
        </Formik>
    )
}


export default loginForm;
