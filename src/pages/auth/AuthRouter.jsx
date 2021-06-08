import React from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import Login from './Login';
import ConfirmPassword from './ConfirmPassword';
import ForgotPassword from './ForgotPassword';
import SecurityCode from './SecurityCode';
import '../../styles/auth/auth.scss';
import LoginRoute from '../../components/auth/LoginRoute';
import PrivateRoute from '../../components/auth/PrivateRoute';

export default function Auth() {
    return (
        <Switch>
            <LoginRoute exact path="/auth/login" component={Login}/>
            <Route exact path="/auth/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/auth/security-code/:id" component={SecurityCode} />
            <PrivateRoute exact path="/auth/confirm-password" component={ConfirmPassword} />
            <Route exact path="/auth">
                <Redirect to="/auth/login"/>
            </Route>
            <Redirect path='*' to='/not-found' />
        </Switch>
    )
}