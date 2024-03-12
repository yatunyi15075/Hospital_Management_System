// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        {/* Other routes for different user dashboards */}
      </Switch>
    </Router>
  );
};

export default App;
