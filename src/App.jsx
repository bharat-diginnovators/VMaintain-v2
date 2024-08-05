import { useState } from "react";
import "./App.css";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./components/Home";
import {

  Route,
  Routes,
} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/sign-in"  element={<SignIn/>}/>
      <Route path="/sign-up"  element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/otp" element={<Otp/>}/>
    </Routes>
  );
}

export default App;
