
//This Works but it's not the best way to do it. (Needs protected routes)
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



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home/Home';
// import Exercise from './pages/Exercise/Exercise';
// import IntensityLevel from './pages/IntensityLevel/IntensityLevel';
// import MuscleGroup from './pages/MuscleGroup/MuscleGroup';
// import Schedule from './pages/Schedule/Schedule';
// import UserProfile from './pages/UserProfile/UserProfile';
// import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import { AuthContextProvider } from './contexts/authContext';

// function App() {
//   const [schedule, setSchedule] = useState([]);

//   const handleSetSchedule = (newSchedule) => {
//     setSchedule(newSchedule);
//   };

//   return (
//     <AuthContextProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Layout><Home /></Layout>} />
//           <Route path="/exercise" element={<Layout><Exercise /></Layout>} />
//           <Route path="/intensity-level" element={<Layout><IntensityLevel /></Layout>} />
//           <Route path="/muscle-group" element={<Layout><MuscleGroup /></Layout>} />
//           <Route path="/schedule" element={<Layout><Schedule schedule={schedule} /></Layout>} />
//           <Route path="/userprofile" element={<Layout><UserProfile /></Layout>} />
//           <Route path="/workoutplan" element={<Layout><WorkoutPlan setSchedule={handleSetSchedule} /></Layout>} />
//         </Routes>
//       </Router>
//     </AuthContextProvider>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Layout from './components/Layout/Layout';

// import Home from './pages/Home/Home';
// import Exercise from './pages/Exercise/Exercise';
// import IntensityLevel from './pages/IntensityLevel/IntensityLevel';
// import MuscleGroup from './pages/MuscleGroup/MuscleGroup';
// import Schedule from './pages/Schedule/Schedule';
// import UserProfile from './pages/UserProfile/UserProfile';
// import WorkoutPlan from './pages/WorkoutPlan/WorkoutPlan';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

// import { AuthContextProvider } from './contexts/authContext';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/" element={
//               <PrivateRoute>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/exercise" element={<Exercise />} />
//                   <Route path="/intensity-level" element={<IntensityLevel />} />
//                   <Route path="/muscle-group" element={<MuscleGroup />} />
//                   <Route path="/schedule" element={<Schedule />} />
//                   <Route path="/user-profile" element={<UserProfile />} />
//                   <Route path="/workout-plan" element={<WorkoutPlan />} />
//                 </Routes>
//               </PrivateRoute>
//             } />
//           </Routes>
//         </Layout>
//       </Router>
//     </AuthContextProvider>
//   );
// }

// export default App;



