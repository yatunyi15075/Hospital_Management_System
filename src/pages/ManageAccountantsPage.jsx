import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const AccountantForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const AccountantInput = styled.input`
  padding: 10px;
`;

const AccountantButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const AccountantList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AccountantListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageAccountantsPage = () => {
  const [accountants, setAccountants] = useState([]);
  const [newAccountantName, setNewAccountantName] = useState('');
  const [newAccountantEmail, setNewAccountantEmail] = useState('');
  const [newAccountantPhone, setNewAccountantPhone] = useState('');

  useEffect(() => {
    // Fetch accountants from API and set the state
    // Example: fetchAccountants();
  }, []);

  const handleAddAccountant = () => {
    // Call API to add accountant with newAccountantName, newAccountantEmail, and newAccountantPhone
    // Example: addAccountant(newAccountantName, newAccountantEmail, newAccountantPhone);
    // After successful addition, update accountants state
    setAccountants([...accountants, { id: accountants.length + 1, name: newAccountantName, email: newAccountantEmail, phone: newAccountantPhone }]);
    setNewAccountantName('');
    setNewAccountantEmail('');
    setNewAccountantPhone('');
  };

  const handleDeleteAccountant = (id) => {
    // Call API to delete accountant with id
    // Example: deleteAccountant(id);
    // After successful deletion, update accountants state
    setAccountants(accountants.filter((accountant) => accountant.id !== id));
  };

  return (
    <Container>
      <Title>Manage Accountants</Title>
      
      <AccountantForm>
        <AccountantInput 
          type="text" 
          placeholder="Enter accountant name" 
          value={newAccountantName} 
          onChange={(e) => setNewAccountantName(e.target.value)} 
        />
        <AccountantInput 
          type="email" 
          placeholder="Enter accountant email" 
          value={newAccountantEmail} 
          onChange={(e) => setNewAccountantEmail(e.target.value)} 
        />
        <AccountantInput 
          type="tel" 
          placeholder="Enter accountant phone" 
          value={newAccountantPhone} 
          onChange={(e) => setNewAccountantPhone(e.target.value)} 
        />
        <AccountantButton onClick={handleAddAccountant}>Add Accountant</AccountantButton>
      </AccountantForm>

      <AccountantList>
        {accountants.map((accountant) => (
          <AccountantListItem key={accountant.id}>
            <span>{accountant.name}</span>
            <span>{accountant.email}</span>
            <span>{accountant.phone}</span>
            <AccountantButton onClick={() => handleDeleteAccountant(accountant.id)}>Delete</AccountantButton>
          </AccountantListItem>
        ))}
      </AccountantList>
    </Container>
  );
};

export default ManageAccountantsPage;
