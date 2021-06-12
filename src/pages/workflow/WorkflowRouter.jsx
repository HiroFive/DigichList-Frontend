import React from 'react'
import SideMenu from '../../components/workflow/SideMenu'
import Dashboard from './Dashboard'
import AdminUsers from './AdminUsers'
import Defects from './Defects'
import EmployersUsers from './EmployersUsers'
// import Error404 from '../Error/404page'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AccessLevelRoute from '../../components/auth/AccessLevelRoute'

export default function WorkflowRouter() {
    // const location = useLocation();
    return (
            <SideMenu
                body={
                    <Switch>
                        <PrivateRoute exact path="/workflow/dashboard" component={Dashboard} />
                        <AccessLevelRoute exact path="/workflow/admin-users" component={AdminUsers} />
                        <PrivateRoute exact path="/workflow/defects" component={Defects} />
                        <PrivateRoute exact path="/workflow/employers-users" component={EmployersUsers} />
                        <PrivateRoute exact path="/workflow">
                            <Redirect to="/workflow/dashboard" />
                        </PrivateRoute>
                        <Redirect path='*' to='/not-found' />
                    </Switch>
                }
            />
    )
}