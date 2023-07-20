import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import Exercise from './pages/Exercise/Exercise';
import Schedule from './pages/Schedule/Schedule';
import UserProfile from './pages/UserProfile/UserProfile';
import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { AuthContextProvider } from './contexts/authContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/exercise" element={<Layout><Exercise /></Layout>} />
          <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
          <Route path="/userprofile" element={<Layout><UserProfile /></Layout>} />
          <Route path="/workoutplan" element={<Layout><WorkoutPlan /></Layout>} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;


