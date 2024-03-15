// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       {/* Add your header content here */}
//       <h1>Hospital Management System</h1>
//     </header>
//   );
// }

// export default Header;




// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const HospitalName = styled.h1`
  font-size: 24px;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background-color: #ffcc00;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd633;
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <HospitalName>Hospital Management System</HospitalName>
      <ActionsContainer>
        <Button>Notifications</Button>
        <Button>Profile</Button>
        <Button>Logout</Button>
      </ActionsContainer>
    </HeaderContainer>
  );
};

export default Header;
