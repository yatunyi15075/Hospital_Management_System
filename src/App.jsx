// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/DashboardHeader';
// import Sidebar from './components/Sidebar';
// import AdminDashboard from './components/AdminDashboard';

// const App = () => {
//   return (
//     <Router>
//       <div style={{ display: 'flex', flexDirection: 'row' }}>
//         <Sidebar />
//         <div style={{ flex: 1 }}>
//           <Header />
//           <AdminDashboard />
//           {/* No Dashboard component here */}
//           {/* Add other components or routes here if needed */}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard component

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          {/* Add AdminDashboard component here */}
          <AdminDashboard />
          {/* Add other components or routes here if needed */}
        </div>
      </div>
    </Router>
  );
}

export default App;
