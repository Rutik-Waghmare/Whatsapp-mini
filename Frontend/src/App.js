import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Explore from './pages/Explore';
import './App.css';

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <div className="App">
      {isAuthenticated && <Navbar />}
      <div className={isAuthenticated ? 'app-content' : 'auth-content'}>
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/feed" />} 
          />
          <Route 
            path="/register" 
            element={!isAuthenticated ? <Register /> : <Navigate to="/feed" />} 
          />
          <Route 
            path="/feed" 
            element={isAuthenticated ? <Feed /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile/:userId?" 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/notifications" 
            element={isAuthenticated ? <Notifications /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/explore" 
            element={isAuthenticated ? <Explore /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/feed" : "/login"} />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;