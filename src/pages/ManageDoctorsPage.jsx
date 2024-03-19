import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DoctorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const DoctorInput = styled.input`
  padding: 10px;
`;

const DoctorButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DoctorList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DoctorListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageDoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctorName, setNewDoctorName] = useState('');
  const [newDoctorSpecialization, setNewDoctorSpecialization] = useState('');

  useEffect(() => {
    // Fetch doctors from API and set the state
    // Example: fetchDoctors();
  }, []);

  const handleAddDoctor = () => {
    // Call API to add doctor with newDoctorName and newDoctorSpecialization
    // Example: addDoctor(newDoctorName, newDoctorSpecialization);
    // After successful addition, update doctors state
    setDoctors([...doctors, { id: doctors.length + 1, name: newDoctorName, specialization: newDoctorSpecialization }]);
    setNewDoctorName('');
    setNewDoctorSpecialization('');
  };

  const handleDeleteDoctor = (id) => {
    // Call API to delete doctor with id
    // Example: deleteDoctor(id);
    // After successful deletion, update doctors state
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <Container>
      <Title>Manage Doctors</Title>
      
      <DoctorForm>
        <DoctorInput 
          type="text" 
          placeholder="Enter doctor name" 
          value={newDoctorName} 
          onChange={(e) => setNewDoctorName(e.target.value)} 
        />
        <DoctorInput 
          type="text" 
          placeholder="Enter doctor specialization" 
          value={newDoctorSpecialization} 
          onChange={(e) => setNewDoctorSpecialization(e.target.value)} 
        />
        <DoctorButton onClick={handleAddDoctor}>Add Doctor</DoctorButton>
      </DoctorForm>

      <DoctorList>
        {doctors.map((doctor) => (
          <DoctorListItem key={doctor.id}>
            <span>{doctor.name}</span>
            <span>{doctor.specialization}</span>
            <DoctorButton onClick={() => handleDeleteDoctor(doctor.id)}>Delete</DoctorButton>
          </DoctorListItem>
        ))}
      </DoctorList>
    </Container>
  );
};

export default ManageDoctorsPage;
