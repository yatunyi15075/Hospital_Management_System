import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ReceptionistForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const ReceptionistInput = styled.input`
  padding: 10px;
`;

const ReceptionistButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ReceptionistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReceptionistListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageReceptionistsPage = () => {
  const [receptionists, setReceptionists] = useState([]);
  const [newReceptionistName, setNewReceptionistName] = useState('');
  const [newReceptionistRole, setNewReceptionistRole] = useState('');

  useEffect(() => {
    // Fetch receptionists from API and set the state
    // Example: fetchReceptionists();
  }, []);

  const handleAddReceptionist = () => {
    // Call API to add receptionist with newReceptionistName and newReceptionistRole
    // Example: addReceptionist(newReceptionistName, newReceptionistRole);
    // After successful addition, update receptionists state
    setReceptionists([...receptionists, { id: receptionists.length + 1, name: newReceptionistName, role: newReceptionistRole }]);
    setNewReceptionistName('');
    setNewReceptionistRole('');
  };

  const handleDeleteReceptionist = (id) => {
    // Call API to delete receptionist with id
    // Example: deleteReceptionist(id);
    // After successful deletion, update receptionists state
    setReceptionists(receptionists.filter((receptionist) => receptionist.id !== id));
  };

  return (
    <Container>
      <Title>Manage Receptionists</Title>
      
      <ReceptionistForm>
        <ReceptionistInput 
          type="text" 
          placeholder="Enter receptionist name" 
          value={newReceptionistName} 
          onChange={(e) => setNewReceptionistName(e.target.value)} 
        />
        <ReceptionistInput 
          type="text" 
          placeholder="Enter receptionist role" 
          value={newReceptionistRole} 
          onChange={(e) => setNewReceptionistRole(e.target.value)} 
        />
        <ReceptionistButton onClick={handleAddReceptionist}>Add Receptionist</ReceptionistButton>
      </ReceptionistForm>

      <ReceptionistList>
        {receptionists.map((receptionist) => (
          <ReceptionistListItem key={receptionist.id}>
            <span>{receptionist.name}</span>
            <span>{receptionist.role}</span>
            <ReceptionistButton onClick={() => handleDeleteReceptionist(receptionist.id)}>Delete</ReceptionistButton>
          </ReceptionistListItem>
        ))}
      </ReceptionistList>
    </Container>
  );
};

export default ManageReceptionistsPage;
