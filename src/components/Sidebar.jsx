import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      {/* Add your sidebar content here */}
      <nav>
        <ul>
        <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/manageDoctorsPage">Doctors</Link></li>
          <li><Link to="/manageNursesPage">Nurses</Link></li>
          <li><Link to="/manageLaboratoryPage">Laboratory</Link></li>
          <li><Link to="/manageAccountantsPage">Accountants</Link></li>
          <li><Link to="/managePharmacistsPage">Pharmacists</Link></li>
          <li><Link to="/manageReceptionistsPage">Receptionists</Link></li>
          <li><Link to="/manageDepartmentsPage">Departments</Link></li>
          <li><Link to="/managePatientsPage">Patients</Link></li>
          <li><Link to="/manageAppointmentsPage">Appointments</Link></li>
          <li><Link to="/manageOperationreportsPage">Operation reports</Link></li>
          <li><Link to="/managePaymentsPage">Payments</Link></li>
          <li><Link to="/changeProfilePage">Profile</Link></li>
          
          {/* Add more links for other dashboard pages */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;




// // src/components/Sidebar.js

// import React from 'react';
// import styled from 'styled-components';

// const SidebarContainer = styled.div`
//   width: 250px;
//   height: 100%;
//   background-color: #333;
//   color: white;
//   padding: 20px;
// `;

// const SidebarHeader = styled.h2`
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

// const SidebarLink = styled.a`
//   display: block;
//   color: white;
//   text-decoration: none;
//   margin-bottom: 10px;
//   font-size: 16px;
//   transition: 0.3s ease;

//   &:hover {
//     color: #ffcc00;
//   }
// `;

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <SidebarHeader>Hospital Management</SidebarHeader>
//       <SidebarLink href="#">Dashboard</SidebarLink>
//       <SidebarLink href="#">Manage Patients</SidebarLink>
//       <SidebarLink href="#">Manage Doctors</SidebarLink>
//       <SidebarLink href="#">Manage Nurses</SidebarLink>
//       <SidebarLink href="#">View Appointments</SidebarLink>
//       <SidebarLink href="#">Reports</SidebarLink>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;
