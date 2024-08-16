import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Home";
import Teams from "./components/Dashboard/Teams";
import Sites from "./components/Dashboard/Sites";
import Settings from "./components/Dashboard/Settings";
import Profile from "./components/Dashboard/Profile";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="teams" element={<Teams />} />
        <Route path="sites" element={<Sites />} />
        <Route path="settings" element={<Settings/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
    </Routes>
  );
}

export default App;
