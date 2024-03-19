import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.aside`
  width: 200px;
  background-color: #f4f4f4;
`;

const Navigation = styled.nav`
  padding: 20px;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Fetch patients from API and set the state
    // Example: fetchPatients();
  }, []);

  const handleViewPatientRecords = (patientId) => {
    // Call API to fetch patient records with patientId
    // Example: fetchPatientRecords(patientId);
    // After successful fetching, update selectedPatient state
    setSelectedPatient(patients.find((patient) => patient.id === patientId));
  };

  const handleAddPatient = (newPatient) => {
    // Call API to add patient with newPatient data
    // Example: addPatient(newPatient);
    // After successful addition, update patients state
    setPatients([...patients, newPatient]);
  };

  const handleDeletePatient = (patientId) => {
    // Call API to delete patient with patientId
    // Example: deletePatient(patientId);
    // After successful deletion, update patients state
    setPatients(patients.filter((patient) => patient.id !== patientId));
  };

  return (
    <Container>
      <Sidebar>
        <Navigation>
          <ul>
            <li><button onClick={() => handleViewPatientRecords(selectedPatient?.id)}>View Records</button></li>
            <li><button onClick={() => setSelectedPatient(null)}>Add New Patient</button></li>
          </ul>
        </Navigation>
      </Sidebar>
      <MainContent>
        {selectedPatient ? (
          <div>
            <Title>Patient Records</Title>
            <p>Name: {selectedPatient.name}</p>
            <p>Age: {selectedPatient.age}</p>
            <p>Gender: {selectedPatient.gender}</p>
            {/* Display more patient information here */}
            <button onClick={() => handleDeletePatient(selectedPatient.id)}>Delete Patient</button>
          </div>
        ) : (
          <div>
            <Title>Add New Patient</Title>
            {/* Add form to add new patient */}
            <button onClick={() => handleAddPatient({ id: patients.length + 1, name: 'New Patient', age: 0, gender: 'Male' })}>Save</button>
          </div>
        )}
      </MainContent>
    </Container>
  );
};

export default Patients;
