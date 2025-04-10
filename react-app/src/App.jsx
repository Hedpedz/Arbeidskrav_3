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
}

export default App;