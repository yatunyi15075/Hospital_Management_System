import AdminDashboard from './components/AdminDashboard';


// const App = () => {
//   return (
//     <div>
//       <AdminDashboard />
      
//     </div>
//   );
// };

// export default App;


// check This code at home


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import ManageDoctorsPage from './pages/ManageDoctorsPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;

