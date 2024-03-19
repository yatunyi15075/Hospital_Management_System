import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DepartmentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const DepartmentInput = styled.input`
  padding: 10px;
`;

const DepartmentButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DepartmentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DepartmentListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ManageDepartmentsPage = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState('');

  useEffect(() => {
    // Fetch departments from API and set the state
    // Example: fetchDepartments();
  }, []);

  const handleAddDepartment = () => {
    // Call API to add department with newDepartmentName
    // Example: addDepartment(newDepartmentName);
    // After successful addition, update departments state
    setDepartments([...departments, { id: departments.length + 1, name: newDepartmentName }]);
    setNewDepartmentName('');
  };

  const handleDeleteDepartment = (id) => {
    // Call API to delete department with id
    // Example: deleteDepartment(id);
    // After successful deletion, update departments state
    setDepartments(departments.filter((department) => department.id !== id));
  };

  return (
    <Container>
      <Title>Manage Departments</Title>
      
      <DepartmentForm>
        <DepartmentInput 
          type="text" 
          placeholder="Enter department name" 
          value={newDepartmentName} 
          onChange={(e) => setNewDepartmentName(e.target.value)} 
        />
        <DepartmentButton onClick={handleAddDepartment}>Add Department</DepartmentButton>
      </DepartmentForm>

      <DepartmentList>
        {departments.map((department) => (
          <DepartmentListItem key={department.id}>
            <span>{department.name}</span>
            <DepartmentButton onClick={() => handleDeleteDepartment(department.id)}>Delete</DepartmentButton>
          </DepartmentListItem>
        ))}
      </DepartmentList>
    </Container>
  );
};

export default ManageDepartmentsPage;
