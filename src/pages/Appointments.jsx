import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const AppointmentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const AppointmentInput = styled.input`
  padding: 10px;
`;

const AppointmentButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const AppointmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AppointmentListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ViewAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointmentName, setNewAppointmentName] = useState('');
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [newAppointmentTime, setNewAppointmentTime] = useState('');

  useEffect(() => {
    // Fetch appointments from API and set the state
    // Example: fetchAppointments();
  }, []);

  const handleAddAppointment = () => {
    // Call API to add appointment with newAppointmentName, newAppointmentDate, and newAppointmentTime
    // Example: addAppointment(newAppointmentName, newAppointmentDate, newAppointmentTime);
    // After successful addition, update appointments state
    setAppointments([...appointments, { id: appointments.length + 1, name: newAppointmentName, date: newAppointmentDate, time: newAppointmentTime }]);
    setNewAppointmentName('');
    setNewAppointmentDate('');
    setNewAppointmentTime('');
  };

  const handleDeleteAppointment = (id) => {
    // Call API to delete appointment with id
    // Example: deleteAppointment(id);
    // After successful deletion, update appointments state
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <Container>
      <Title>View Appointments</Title>
      
      <AppointmentForm>
        <AppointmentInput 
          type="text" 
          placeholder="Enter appointment name" 
          value={newAppointmentName} 
          onChange={(e) => setNewAppointmentName(e.target.value)} 
        />
        <AppointmentInput 
          type="date" 
          placeholder="Enter appointment date" 
          value={newAppointmentDate} 
          onChange={(e) => setNewAppointmentDate(e.target.value)} 
        />
        <AppointmentInput 
          type="time" 
          placeholder="Enter appointment time" 
          value={newAppointmentTime} 
          onChange={(e) => setNewAppointmentTime(e.target.value)} 
        />
        <AppointmentButton onClick={handleAddAppointment}>Add Appointment</AppointmentButton>
      </AppointmentForm>

      <AppointmentList>
        {appointments.map((appointment) => (
          <AppointmentListItem key={appointment.id}>
            <span>{appointment.name}</span>
            <span>{appointment.date}</span>
            <span>{appointment.time}</span>
            <AppointmentButton onClick={() => handleDeleteAppointment(appointment.id)}>Delete</AppointmentButton>
          </AppointmentListItem>
        ))}
      </AppointmentList>
    </Container>
  );
};

export default ViewAppointmentsPage;
