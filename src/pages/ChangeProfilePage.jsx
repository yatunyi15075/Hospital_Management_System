import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ProfileForm = styled.form`
  max-width: 400px;
  margin-bottom: 20px;
`;

const ProfileInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const ProfileButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ChangeProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update admin profile with new details (name, email, password)
    // Example: updateAdminProfile(name, email, password);
    // After successful update, show success message or redirect to another page
    console.log('Profile updated successfully');
  };

  return (
    <Container>
      <Title>Change Profile</Title>
      
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileInput 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <ProfileInput 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <ProfileInput 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <ProfileButton type="submit">Update Profile</ProfileButton>
      </ProfileForm>
    </Container>
  );
};

export default ChangeProfilePage;
