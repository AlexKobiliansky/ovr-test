import React from 'react';
import {Route, Routes} from 'react-router-dom';
import DashboardPage from '../../pages/DashboardPage';
import UsersPage from '../../pages/UsersPage';
import NoPage from '../../pages/NoPage';
import './Content.sass';

const Content = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
};

export default Content;