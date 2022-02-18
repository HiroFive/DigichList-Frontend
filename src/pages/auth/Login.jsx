/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth/AuthContext';

import { Formik } from 'formik';
import * as Yup from 'yup';

import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { FormCard } from '../../components/auth/FormElements';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { FormStyleMake } from '../../components/auth/Style/FormStyle';
import { CssBaseline } from '@material-ui/core';

const loginForm = (props) => {
    const { history } = props;
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmitRedirect = (response) => {
        if (response.status === 200) {
            history.push('/workflow/dashboard');
        } else {
            setError('Wrong password or email');
        }
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email'),
            })}
            onSubmit={async (values) => {
                setLoading(true);

                const response = await login(values.email, values.password);

                onSubmitRedirect(response);

                setLoading(false);
            }}
        >
            {function (formik) {
                const styles = FormStyleMake();
                return (
                    <FormCard
                        icon={<LockOpenOutlinedIcon />}
                        title='Login in Admin panel'
                        components={
                            <form onSubmit={formik.handleSubmit}>
                                <Typography
                                    variant='body2'
                                    className={styles.errorText}
                                    gutterBottom
                                >
                                    {error}
                                </Typography>
                                <CssBaseline />
                                <TextField
                                    error={formik.errors.email == 'Invalid email'}
                                    className={styles.formInput}
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
                                <TextField
                                    className={styles.formInput}
                                    variant='outlined'
                                    margin='normal'
                                    {...formik.getFieldProps('password')}
                                    fullWidth
                                    size='small'
                                    label='Password'
                                    type='password'
                                    id='password'
                                />
                                <FormControlLabel
                                    className={styles.checkBoxLabel}
                                    control={
                                        <Checkbox
                                            className={styles.checkBox}
                                            disableRipple
                                            color='default'
                                            value='remember'
                                            checkedIcon={
                                                <span
                                                    className={`${styles.icon} ${styles.checkedIcon}`}
                                                />
                                            }
                                            icon={<span className={styles.icon} />}
                                        />
                                    }
                                    label='Remember me'
                                />
                                <Button
                                    className={styles.submitBtn}
                                    type='submit'
                                    fullWidth
                                    disableRipple
                                    disabled={loading}
                                    variant='contained'
                                >
                                    Login
                                </Button>
                                {/* <ResetLink text='Forgot Password?' to='/forgot-password' /> */}
                            </form>
                        }
                    />
                );
            }}
        </Formik>
    );
};

export default loginForm;
