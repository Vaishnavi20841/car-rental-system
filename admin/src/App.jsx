import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AddCar from "./pages/AddCar/AddCar";
import ManageCar from "./pages/ManageCar/ManageCar";
import Booking from "./pages/Booking/Booking";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AddCar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manage-cars"
        element={
          <ProtectedRoute>
            <ManageCar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        }
      />

      {/* Redirect all unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;