import React from 'react';
import { Switch,Route, Redirect, useLocation } from 'react-router-dom';
import Login from './Login';
import ConfirmPassword from './ConfirmPassword';
import ForgotPassword from './ForgotPassword';
import SecurityCode from './SecurityCode';
import '../../styles/auth/auth.scss';


export default function Auth() {
    // const history = useLocation();
    return (
        <Switch>
            <Route exact path="/auth/login" component={Login}/>
            <Route exact path="/auth/forgot-password" component={ForgotPassword} />
            <Route exact path="/auth/security-code/:id" component={SecurityCode} />
            <Route exact path="/auth/confirm-password" component={ConfirmPassword} />
            <Route exact path="/auth">
                <Redirect to="/auth/login"/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}