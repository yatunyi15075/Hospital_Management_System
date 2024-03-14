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
