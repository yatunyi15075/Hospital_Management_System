import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const PharmacistForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const PharmacistInput = styled.input`
  padding: 10px;
`;

const PharmacistButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const PharmacistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PharmacistListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManagePharmacistsPage = () => {
  const [pharmacists, setPharmacists] = useState([]);
  const [newPharmacistName, setNewPharmacistName] = useState('');
  const [newPharmacistEmail, setNewPharmacistEmail] = useState('');
  const [newPharmacistPhone, setNewPharmacistPhone] = useState('');

  useEffect(() => {
    // Fetch pharmacists from API and set the state
    // Example: fetchPharmacists();
  }, []);

  const handleAddPharmacist = () => {
    // Call API to add pharmacist with newPharmacistName, newPharmacistEmail, and newPharmacistPhone
    // Example: addPharmacist(newPharmacistName, newPharmacistEmail, newPharmacistPhone);
    // After successful addition, update pharmacists state
    setPharmacists([...pharmacists, { id: pharmacists.length + 1, name: newPharmacistName, email: newPharmacistEmail, phone: newPharmacistPhone }]);
    setNewPharmacistName('');
    setNewPharmacistEmail('');
    setNewPharmacistPhone('');
  };

  const handleDeletePharmacist = (id) => {
    // Call API to delete pharmacist with id
    // Example: deletePharmacist(id);
    // After successful deletion, update pharmacists state
    setPharmacists(pharmacists.filter((pharmacist) => pharmacist.id !== id));
  };

  return (
    <Container>
      <Title>Manage Pharmacists</Title>
      
      <PharmacistForm>
        <PharmacistInput 
          type="text" 
          placeholder="Enter pharmacist name" 
          value={newPharmacistName} 
          onChange={(e) => setNewPharmacistName(e.target.value)} 
        />
        <PharmacistInput 
          type="email" 
          placeholder="Enter pharmacist email" 
          value={newPharmacistEmail} 
          onChange={(e) => setNewPharmacistEmail(e.target.value)} 
        />
        <PharmacistInput 
          type="tel" 
          placeholder="Enter pharmacist phone" 
          value={newPharmacistPhone} 
          onChange={(e) => setNewPharmacistPhone(e.target.value)} 
        />
        <PharmacistButton onClick={handleAddPharmacist}>Add Pharmacist</PharmacistButton>
      </PharmacistForm>

      <PharmacistList>
        {pharmacists.map((pharmacist) => (
          <PharmacistListItem key={pharmacist.id}>
            <span>{pharmacist.name}</span>
            <span>{pharmacist.email}</span>
            <span>{pharmacist.phone}</span>
            <PharmacistButton onClick={() => handleDeletePharmacist(pharmacist.id)}>Delete</PharmacistButton>
          </PharmacistListItem>
        ))}
      </PharmacistList>
    </Container>
  );
};

export default ManagePharmacistsPage;
