import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import LoginScreen from "./Screens/Loginscreen";
import Dashboard from "./Screens/Dashboard/Index";

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<LoginScreen />} />


      </Routes>
    </Router>
  );
}

export default App;
