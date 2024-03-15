import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ManageDoctorsPage from '../pages/ManageDoctorsPage';
import Dashboard from '../pages/Dashboard';
import ManageNursesPage from '../pages/ManageNursesPage';
import ManageLaboratoryPage from '../pages/ManageLaboratoryPage';
import ManageAccountantsPage from '../pages/ManageAccountantsPage';
import ManagePharmacistsPage from '../pages/ManagePharmacistsPage';
import ManageReceptionistsPage from '../pages/ManageReceptionistsPage';
import ManageDepartmentsPage from '../pages/ManageDepartmentsPage';
import ViewAppointmentsPage from '../pages/ViewAppointmentsPage';
import ChangeProfilePage from '../pages/ChangeProfilePage';
import OperationReportsPage from '../pages/OperationReportsPage';
import Patients from '../pages/Patients';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manageDoctorsPage" element={<ManageDoctorsPage />} />
          <Route path="/manageNursesPage" element={<ManageNursesPage />} />
          <Route path="/manageLaboratoryPage" element={<ManageLaboratoryPage />} />
          <Route path="/manageAccountantsPage" element={<ManageAccountantsPage />} />
          <Route path="/managePharmacistsPage" element={<ManagePharmacistsPage />} />
          <Route path="/manageReceptionistsPage" element={<ManageReceptionistsPage />} />
          <Route path="/manageDepartmentsPage" element={<ManageDepartmentsPage />} />
          <Route path="/operationReportsPagePage" element={<OperationReportsPage />} />
          <Route path="/manageAppointmentsPage" element={<ViewAppointmentsPage />} />
          <Route path="/changeProfilePage" element={<ChangeProfilePage />} />
          <Route path="/managePatientsPage" element={<Patients />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
