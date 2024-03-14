import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>Hello Dashboard</div>

    // <Router>
    //   <AppContainer>
    //     <Navbar />
    //     <ContentContainer>
    //       <Routes>
    //         <Route path="/" element={<HomePage />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/technologies" element={<Technologies />} />
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //     </ContentContainer>
    //     <Footer />
    //   </AppContainer>
    // </Router>
  );
}

// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <Projects />
//       <Technologies />
//       <About />
//       <Achievement />
//     </>
//   );
// }

export default App;


// // src/components/AdminDashboard.js

// import React from 'react';
// import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import ManageDoctorsPage from '../pages/ManageDoctorsPage';
// import ManageNursesPage from '../pages/ManageNursesPage';
// import ManageLaboratoryPage from '../pages/ManageLaboratoryPage';
// import ManageAccountantsPage from '../pages/ManageAccountantsPage';
// import ManagePharmacistsPage from '../pages/ManagePharmacistsPage';
// import ManageReceptionistsPage from '../pages/ManageReceptionistsPage';
// import ManageDepartmentsPage from '../pages/ManageDepartmentsPage';
// // import OperationReportsPage from '../pages/OperationReportsPage';
// import ViewAppointmentsPage from '../pages/ViewAppointmentsPage';
// import ChangeProfilePage from '../pages/ChangeProfilePage';
// import OperationReportsPage from '../pages/OperationReporstPage';



// const AdminDashboard = () => {
//   const { path, url } = useRouteMatch();

//   return (
//     <div className="admin-dashboard">
//       <div className="admin-content">
//         <Switch>
//           <Route exact path={path}>
//             <ManageDoctorsPage />
//           </Route>
//           <Route path={`${path}/manage-doctors`}>
//             <ManageDoctorsPage />
//           </Route>
//           <Route path={`${path}/manage-nurses`}>
//             <ManageNursesPage />
//           </Route>
//           <Route path={`${path}/manage-laboratory`}>
//             <ManageLaboratoryPage />
//           </Route>
//           <Route path={`${path}/manage-accountants`}>
//             <ManageAccountantsPage />
//           </Route>
//           <Route path={`${path}/manage-pharmacists`}>
//             <ManagePharmacistsPage />
//           </Route>
//           <Route path={`${path}/manage-receptionists`}>
//             <ManageReceptionistsPage />
//           </Route>
//           <Route path={`${path}/manage-departments`}>
//             <ManageDepartmentsPage />
//           </Route>
//           <Route path={`${path}/operation-reports`}>
//             <OperationReportsPage />
//           </Route>
//           <Route path={`${path}/view-appointments`}>
//             <ViewAppointmentsPage />
//           </Route>
//           <Route path={`${path}/change-profile`}>
//             <ChangeProfilePage />
//           </Route>
//         </Switch>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
