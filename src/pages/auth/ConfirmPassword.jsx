import React from 'react';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { HelpingText, ResetLink, FormCard } from '../../components/auth/FormElements';
import TextField from '@material-ui/core/TextField';
import FormStyle from '../../components/auth/Style/FormStyle';
import Button from '@material-ui/core/Button';
import { Formik } from "formik";
import * as Yup from "yup";

export default function ResetPassword() {
    return (
        <Formik
            initialValues={{
                password: '',
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .matches(/(?=.*[0-9])/, "Password must contain a number.")
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {function (formik) {
                const styles = FormStyle();
                return (
                    <FormCard
                        icon={<VpnKeyOutlinedIcon />}
                        title="New Password"
                        components={
                            <form>
                                <TextField
                                    error={formik.errors.password == 'Password is required'}
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
                                <TextField
                                    error={formik.errors.confirmPassword == 'Confirm Password is required'}
                                    className={styles.formInput}
                                    variant="outlined"
                                    margin="normal"
                                    helperText={formik.errors.confirmPassword}
                                    {...formik.getFieldProps('confirmPassword')}
                                    fullWidth
                                    size="small"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                />
                                <HelpingText text='Create a new password that is at least 6 characters long.' />
                                <Button
                                    className={styles.submitBtn}
                                    type="submit"
                                    fullWidth
                                    disableRipple
                                    variant="contained">
                                    Confirm
                                </Button>
                                <ResetLink text='Cancel' to='/login' />
                            </form>
                        }
                    />
                )
            }}
        </Formik>
    )
}