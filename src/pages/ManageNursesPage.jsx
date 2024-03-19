// src/pages/ManageNursesPage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const NurseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const NurseInput = styled.input`
  padding: 10px;
`;

const NurseButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const NurseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NurseListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageNursesPage = () => {
  const [nurses, setNurses] = useState([]);
  const [newNurseName, setNewNurseName] = useState('');

  useEffect(() => {
    // Fetch nurses from API and set the state
    // Example: fetchNurses();
  }, []);

  const handleAddNurse = () => {
    // Call API to add nurse with newNurseName
    // Example: addNurse(newNurseName);
    // After successful addition, update nurses state
    setNurses([...nurses, { id: nurses.length + 1, name: newNurseName }]);
    setNewNurseName('');
  };

  const handleDeleteNurse = (id) => {
    // Call API to delete nurse with id
    // Example: deleteNurse(id);
    // After successful deletion, update nurses state
    setNurses(nurses.filter((nurse) => nurse.id !== id));
  };

  return (
    <Container>
      <Title>Manage Nurses</Title>
      
      <NurseForm>
        <NurseInput 
          type="text" 
          placeholder="Enter nurse name" 
          value={newNurseName} 
          onChange={(e) => setNewNurseName(e.target.value)} 
        />
        <NurseButton onClick={handleAddNurse}>Add Nurse</NurseButton>
      </NurseForm>

      <NurseList>
        {nurses.map((nurse) => (
          <NurseListItem key={nurse.id}>
            <span>{nurse.name}</span>
            <NurseButton onClick={() => handleDeleteNurse(nurse.id)}>Delete</NurseButton>
          </NurseListItem>
        ))}
      </NurseList>
    </Container>
  );
};

export default ManageNursesPage;
