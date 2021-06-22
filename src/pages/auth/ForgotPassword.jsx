import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { HelpingText, ResetLink, FormCard } from '../../components/auth/FormElements';
import FormStyle from '../../components/auth/Style/FormStyle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

const ResetPassword = () => {
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Invalid email'),
            })}
            onSubmit={values => {
                let templateParams = {
                    message: '123213',
                    mail: values.email,
                };
                emailjs.send('service_08tnqwp', 'template_6gzqjcs', templateParams, 'user_GRPybxcZZu8qPlh4lFr1o')
                    .then((response) => {
                        console.log('Mail send: ', response.status, response.text);
                    }, (err) => {
                        console.log('Send failed: ', err);
                    }).then(() => {
                        window.location = `/auth/security-code/${values.email}`
                    });

                console.log(values.email);
            }}
        >
            {function (formik) {
                const styles = FormStyle()
                return (
                    <FormCard
                        icon={<LockOutlinedIcon />}
                        title="Forgot Password"
                        components={
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    error={formik.errors.email == 'Invalid email'}
                                    className={styles.formInput}
                                    variant="outlined"
                                    margin="normal"
                                    helperText={formik.errors.email}
                                    {...formik.getFieldProps('email')}
                                    fullWidth
                                    size="small"
                                    label="Email"
                                    type="email"
                                    id="email"
                                />
                                <HelpingText text='By clicking "Reset Password", we will send a link to reset the password' />
                                <Button
                                className={styles.submitBtn}
                                type="submit"
                                fullWidth
                                disableRipple
                                variant="contained">
                                Reset Password
                            </Button>
                                <ResetLink text='Back to Login' to='/login' />
                            </form>
                        }
                    />)
            }}
        </Formik>
    )
}

export default ResetPassword;