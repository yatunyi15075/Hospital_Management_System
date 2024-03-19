import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const ReportInput = styled.input`
  padding: 10px;
`;

const ReportTextarea = styled.textarea`
  padding: 10px;
`;

const ReportButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ReportList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReportListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const OperationReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [newReportTitle, setNewReportTitle] = useState('');
  const [newReportDescription, setNewReportDescription] = useState('');
  const [sortType, setSortType] = useState('date'); // 'date' or 'title'
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    // Fetch operation reports from API and set the state
    // Example: fetchOperationReports();
  }, []);

  const handleAddReport = () => {
    // Call API to add operation report with newReportTitle and newReportDescription
    // Example: addOperationReport(newReportTitle, newReportDescription);
    // After successful addition, update reports state
    setReports([...reports, { id: reports.length + 1, title: newReportTitle, description: newReportDescription, date: new Date() }]);
    setNewReportTitle('');
    setNewReportDescription('');
  };

  const handleDeleteReport = (id) => {
    // Call API to delete operation report with id
    // Example: deleteOperationReport(id);
    // After successful deletion, update reports state
    setReports(reports.filter((report) => report.id !== id));
  };

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedReports = filteredReports.sort((a, b) => {
    if (sortType === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <Container>
      <Title>Operation Reports</Title>
      
      <ReportForm>
        <ReportInput 
          type="text" 
          placeholder="Enter report title" 
          value={newReportTitle} 
          onChange={(e) => setNewReportTitle(e.target.value)} 
        />
        <ReportTextarea 
          placeholder="Enter report description" 
          value={newReportDescription} 
          onChange={(e) => setNewReportDescription(e.target.value)} 
        />
        <ReportButton onClick={handleAddReport}>Add Report</ReportButton>
      </ReportForm>

      <input 
        type="text" 
        placeholder="Search reports" 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)} 
      />

      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="title">Sort by Title</option>
      </select>

      <ReportList>
        {sortedReports.map((report) => (
          <ReportListItem key={report.id}>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p>Date: {report.date}</p>
            <ReportButton onClick={() => handleDeleteReport(report.id)}>Delete</ReportButton>
          </ReportListItem>
        ))}
      </ReportList>
    </Container>
  );
};

export default OperationReportsPage;
