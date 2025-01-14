import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SongRequest from './pages/SongRequest';
import Feature2 from './pages/Feature2';
import Feature3 from './pages/Feature3';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="songrequest" element={<SongRequest />} />
        <Route path="feature2" element={<Feature2 />} />
        <Route path="feature3" element={<Feature3 />} />
      </Route>
    </Routes>
  );
};

export default App;