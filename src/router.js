import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './screen/Login';
import { SignUp } from './screen/SignUp';
import { Dashboard } from './screen/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
