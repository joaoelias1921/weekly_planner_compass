import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './screen/Login';
import { SignUp } from './screen/SignUp';
<<<<<<< HEAD
import { Dashboard } from './screen/Dashboard';
=======
import { Dashboard } from './screen/Planner';
>>>>>>> dfdb1746b7d36da8100950d0385a01d95df38133

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
