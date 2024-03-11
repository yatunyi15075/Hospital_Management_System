// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appintments from './pages/Appointments';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/patients" components ={Patients} />
                <Route path="/appointments" components ={Appointments} />

                {/* Add more routes for other pages*/}
            </Switch>
   
        </Router>
      );   
}

export default App;
