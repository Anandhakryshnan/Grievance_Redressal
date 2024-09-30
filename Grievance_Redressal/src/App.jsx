import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          {/* Insert other routes here if needed */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App
