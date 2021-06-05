import React from 'react'
import SideMenu from '../../components/workflow/SideMenu'
import Dashboard from './Dashboard'
import AdminUsers from './AdminUsers'
import Defects from './Defects'
import EmployersUsers from './EmployersUsers'
// import Error404 from '../Error/404page'
import { Route, Switch, Redirect } from 'react-router-dom';


export default function WorkflowRouter() {
    return (
            <SideMenu
                body={
                    <Switch>
                        <Route exact path="/workflow/dashboard" component={Dashboard} />
                        <Route exact path="/workflow/admin-users" component={AdminUsers} />
                        <Route exact path="/workflow/defects" component={Defects} />
                        <Route exact path="/workflow/employers-users" component={EmployersUsers} />
                        <Route exact path="/workflow">
                            <Redirect to="/workflow/dashboard" />
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                }
            />
    )
}