import React from 'react';
import './styles/app/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WorkflowRouter from './pages/workflow/WorkflowRouter';
import AuthRouter from './pages/auth/AuthRouter';
import Error404 from './pages/Error/404page';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>    
        <Redirect path='/' to='/auth' exact />
        <PrivateRoute path='/workflow' component={WorkflowRouter} />
        <Route path="/auth" component={AuthRouter} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
