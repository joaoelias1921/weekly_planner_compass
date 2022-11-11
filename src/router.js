import React from 'react';
import { Route, Routes, BrowserRouter,  Navigate, Outlet   } from 'react-router-dom';
import { Login } from './screen/Login';
import { SignUp } from './screen/SignUp';
//import Dashboard from './screen/Dashboard';
 
import { Dashboard } from './screen/Planner';
function ProtectedRoutes() {
  const fakeAuthorization = localStorage.getItem('auth') === 'true' ? true : false;

  if (fakeAuthorization !== true) {
    return <Navigate to={'/'} replace />;
  }

  return <Outlet />;
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes  />
          }
        >
        <Route index element={<Dashboard />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
