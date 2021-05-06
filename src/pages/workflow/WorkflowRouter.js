import React from 'react'
import SideMenu from './SideMenu'
import Dashboard from './Dashboard'
import AdminUsers from './AdminUsers'
import Defects from './Defects'
import WorkerUsers from './WorkerUsers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function WorkflowRouter() {
    return (
        <Router>
            <SideMenu
                body={
                    <Switch>
                        <Route path="/workflow/dashboard" component={Dashboard} />
                        <Route path="/workflow/admin-users" component={AdminUsers}/>
                        <Route path="/workflow/defects" component={Defects} />
                        <Route path="/workflow/worker-users" component={WorkerUsers} />
                    </Switch>
                }
            />
        </Router>
    )
}