// src/components/AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Welcome to the Admin Dashboard</h1>
            <div>
                <h2>Dashboard Overview</h2>
                <p>Here you can manage various aspects of the hospital.</p>
            </div>
            <div>
                <h2>Users</h2>
                <p>Manage users, roles, and permissions.</p>
            </div>
            <div>
                <h2>Patients</h2>
                <p>Manage patient records, appointments, and medical histories.</p>
            </div>
            <div>
                <h2>Appointments</h2>
                <p>Schedule, view, and manage appointments.</p>
            </div>
            {/* Add more sections as needed */}
        </div>
    );
}

export default AdminDashboard;
