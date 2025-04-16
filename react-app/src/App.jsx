
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfileCard';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:memberName" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );

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

export default App;