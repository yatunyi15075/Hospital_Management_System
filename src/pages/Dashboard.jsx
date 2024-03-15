import React from 'react';
// import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import Header from '../components/DashboardHeader';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const QuickStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

const RecentActivitiesContainer = styled.div`
  margin-bottom: 20px;
`;

const ActivityItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const QuickLink = styled.a`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  color: black;
`;

const Dashboard = () => {
  // Dummy data for quick stats and recent activities
  const quickStats = [
    { label: 'Total Patients', value: 500 },
    { label: 'Total Doctors', value: 20 },
    { label: 'Total Nurses', value: 50 },
    { label: 'Total Appointments', value: 1000 },
  ];

  const recentActivities = [
    { action: 'Added a new patient', date: '2024-03-10' },
    { action: 'Updated patient record', date: '2024-03-09' },
    { action: 'Scheduled appointment', date: '2024-03-08' },
  ];

  return (
    <DashboardContainer>
      <SectionTitle>Quick Statistics</SectionTitle>
      <QuickStatsContainer>
        {quickStats.map((stat, index) => (
          <StatCard key={index}>
            <div>{stat.label}</div>
            <div>{stat.value}</div>
          </StatCard>
        ))}
      </QuickStatsContainer>

      <SectionTitle>Recent Activities</SectionTitle>
      <RecentActivitiesContainer>
        {recentActivities.map((activity, index) => (
          <ActivityItem key={index}>
            <div>{activity.action}</div>
            <div>{activity.date}</div>
          </ActivityItem>
        ))}
      </RecentActivitiesContainer>

      <SectionTitle>Quick Links</SectionTitle>
      <QuickLinksContainer>
        <QuickLink href="#">Manage Patients</QuickLink>
        <QuickLink href="#">Manage Doctors</QuickLink>
        <QuickLink href="#">Manage Nurses</QuickLink>
        <QuickLink href="#">View Appointments</QuickLink>
      </QuickLinksContainer>
    </DashboardContainer>
  );
};

export default Dashboard;







// const Dashboard = () =>{
//     return (
//     <div>
//         <div className= "container">

//             {/* Main content of dashboard */}

//         </div>
//     </div>
//     );
// };

// export default Dashboard;


