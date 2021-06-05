import React from 'react';
import './styles/app/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WorkflowRouter from './pages/workflow/WorkflowRouter';
import AuthRouter from './pages/auth/AuthRouter';
import Error404 from './pages/Error/404page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/workflow' component={WorkflowRouter} />
        <Route path="/auth" component={AuthRouter} />
        <Route path="/not-found" component={Error404} />
        <Redirect to="/not-found" />
      </Switch>

    </Router>
  );
}

export default App;
