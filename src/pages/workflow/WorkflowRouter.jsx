import React from 'react'
import SideMenu from '../../components/workflow/SideMenu'
import Dashboard from './Dashboard'
import AdminUsers from './AdminUsers'
import Defects from './Defects'
import EmployeesUsers from './EmployeesUsers'
import { Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AccessLevelRoute from '../../components/auth/AccessLevelRoute'

export default function WorkflowRouter() {
    return (
            <SideMenu
                body={
                    <Switch>
                        <PrivateRoute exact path="/workflow/dashboard" component={Dashboard} />
                        <AccessLevelRoute exact path="/workflow/admin-users" component={AdminUsers} />
                        <PrivateRoute exact path="/workflow/defects" component={Defects} />
                        <PrivateRoute exact path="/workflow/employees-users" component={EmployeesUsers} />
                        <PrivateRoute exact path="/workflow">
                            <Redirect to="/workflow/dashboard" />
                        </PrivateRoute>
                        <Redirect path='*' to='/not-found' />
                    </Switch>
                }
            />
    )
}