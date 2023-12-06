import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import { Route, Routes } from "react-router-dom";
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
