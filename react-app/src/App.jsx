import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:user" element={<UserProfile />} />
      </Routes>
    </Layout>
  );
  
}

export default App
