import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './screen/Login';
import { SignUp } from './screen/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
