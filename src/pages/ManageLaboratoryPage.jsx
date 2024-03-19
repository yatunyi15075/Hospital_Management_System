import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TestForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const TestInput = styled.input`
  padding: 10px;
`;

const TestButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TestList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TestListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageLaboratoryPage = () => {
  const [tests, setTests] = useState([]);
  const [newTestName, setNewTestName] = useState('');

  useEffect(() => {
    // Fetch laboratory tests from API and set the state
    // Example: fetchTests();
  }, []);

  const handleAddTest = () => {
    // Call API to add laboratory test with newTestName
    // Example: addTest(newTestName);
    // After successful addition, update tests state
    setTests([...tests, { id: tests.length + 1, name: newTestName }]);
    setNewTestName('');
  };

  const handleDeleteTest = (id) => {
    // Call API to delete laboratory test with id
    // Example: deleteTest(id);
    // After successful deletion, update tests state
    setTests(tests.filter((test) => test.id !== id));
  };

  return (
    <Container>
      <Title>Manage Laboratory Tests</Title>
      
      <TestForm>
        <TestInput 
          type="text" 
          placeholder="Enter test name" 
          value={newTestName} 
          onChange={(e) => setNewTestName(e.target.value)} 
        />
        <TestButton onClick={handleAddTest}>Add Test</TestButton>
      </TestForm>

      <TestList>
        {tests.map((test) => (
          <TestListItem key={test.id}>
            <span>{test.name}</span>
            <TestButton onClick={() => handleDeleteTest(test.id)}>Delete</TestButton>
          </TestListItem>
        ))}
      </TestList>
    </Container>
  );
};

export default ManageLaboratoryPage;
