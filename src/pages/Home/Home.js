import React, { useEffect, useState } from 'react';
import { db } from "../../services/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Table, Container } from 'react-bootstrap';

const Home = () => {
    const [weeklySchedule, setWeeklySchedule] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    });

    useEffect(() => {
        const fetchSchedule = async () => {
            const scheduleCollection = collection(db, "schedule");
            const scheduleSnapshot = await getDocs(scheduleCollection);
            const scheduleData = scheduleSnapshot.docs.map(doc => doc.data());

            const newWeeklySchedule = { ...weeklySchedule };

            scheduleData.forEach(schedule => {
                Object.values(schedule).forEach(workoutPlan => {
                    // Check if workoutPlan.days exists and is an array
                    if (workoutPlan.days && Array.isArray(workoutPlan.days)) {
                        workoutPlan.days.forEach(day => {
                            const duplicate = newWeeklySchedule[day].find(workout =>
                                workout.MuscleGroupDay === workoutPlan.MuscleGroupDay &&
                                workout.time === workoutPlan.time
                            );

                            if (!duplicate) {
                                newWeeklySchedule[day].push({
                                    MuscleGroupDay: workoutPlan.MuscleGroupDay,
                                    time: workoutPlan.time
                                });
                            }
                        });
                    }
                });
            });

            setWeeklySchedule(newWeeklySchedule);
        };

        fetchSchedule();
    }, []);

    return (
        <Container className="mt-4">
            <Table bordered responsive>
                <thead>
                    <tr>
                        {Object.keys(weeklySchedule).map((day, index) => (
                            <th key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.values(weeklySchedule).map((workouts, index) => (
                            <td key={index}>
                                {workouts.map((workout, index) => (
                                    <div key={index}>
                                        <strong>{workout.MuscleGroupDay}</strong>
                                        <br />
                                        {workout.time}
                                        <hr />
                                    </div>
                                ))}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;












// import React, { useState, useEffect } from 'react';
// import { Container, Card, Row, Col } from 'react-bootstrap';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useAuthContext } from '../../hooks/useAuthContext';
// import './Home.css'

// const Home = () => {
//     const { user: currentUser } = useAuthContext();
//     const [userStats, setUserStats] = useState(null);
//     const [workoutData, setWorkoutData] = useState({
//         "2023-07-07": "Leg day",  // Friday
//         "2023-07-10": "Cardio day",  // Monday
//         "2023-07-11": "Arm day",  // Tuesday
//         "2023-07-12": "Core workout",  // Wednesday
//         "2023-07-13": "Back and Shoulders",  // Thursday
//         "2023-07-14": "Full body workout",  // Friday
//         "2023-07-17": "Leg day",  // Monday
//         "2023-07-18": "Cardio day",  // Tuesday
//         "2023-07-19": "Arm day",  // Wednesday
//         "2023-07-20": "Core workout",  // Thursday
//         "2023-07-21": "Back and Shoulders",  // Friday

//     });

//     useEffect(() => {

//         fetch(`api/user-stats/${currentUser.uid}`)
//             .then(response => response.json())
//             .then(data => setUserStats(data));
//     }, [currentUser]);


//     return (
//         <div>

//             <Container>

//                 <h1>Welcome, {currentUser.email}!</h1>
//                 <h2>Your Dashboard</h2>
//                 <Row>
//                     <Col>
//                         <Card>
//                             <Card.Header as="h5">Workout Progress</Card.Header>
//                             <Card.Body>
//                                 <Card.Title>Total Hours Exercising This Week: {userStats?.workoutsThisWeek}</Card.Title>
//                                 <Card.Text>
//                                     Keep up the good work!
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card>
//                             <Card.Header as="h5">Current Program</Card.Header>
//                             <Card.Body>
//                                 <Card.Title>Program Name: {userStats?.currentProgram}</Card.Title>
//                                 <Card.Text>
//                                     You're making progress!
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//                 <h3 className="text-center my-4">Your Workout Calendar</h3>
//                 <Calendar
//                     className="custom-calendar"
//                     tileContent={({ date, view }) => view === 'month' && <p>{workoutData[date.toISOString().split('T')[0]]}</p>}
//                 />

//             </Container>
//         </div>
//     );
// };

// export default Home;

