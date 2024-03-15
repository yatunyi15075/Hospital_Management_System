import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ManageDoctorsPage from './pages/ManageDoctorsPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <div className="container">
            <Dashboard />
            {/* Add other components or routes here if needed */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;


