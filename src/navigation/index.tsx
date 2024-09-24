import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Screens/Dashboard/index";
import BusForm from "../Screens/Userregister/Index";

function Navigation() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Form" element={<BusForm />} />
    </Routes>
  );
}

export default Navigation;
