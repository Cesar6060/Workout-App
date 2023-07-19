import React, { useEffect, useState } from 'react';
import { db } from "../../services/firebase/config";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { Table, Container, Card } from 'react-bootstrap';

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

    const [recentWorkoutPlan, setRecentWorkoutPlan] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            const scheduleCollection = collection(db, "schedule");
            const scheduleSnapshot = await getDocs(scheduleCollection);
            const scheduleData = scheduleSnapshot.docs.map(doc => doc.data());

            const newWeeklySchedule = { ...weeklySchedule };

            // Fetch the most recent workout plan
            const workoutPlanCollection = collection(db, "workoutPlans");
            const recentWorkoutPlanSnapshot = await getDocs(
                query(workoutPlanCollection, orderBy("timestamp", "desc"), limit(1))
            );

            const recentWorkoutPlanData = recentWorkoutPlanSnapshot.docs.map(doc => doc.data())[0];

            // Store the recent workout plan in the state
            setRecentWorkoutPlan(recentWorkoutPlanData);

            scheduleData.forEach(schedule => {
                Object.values(schedule).forEach(workoutPlan => {
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

            {recentWorkoutPlan && (
                <div className="mt-4">
                    <h4>Most Recent Workout Plan:</h4>
                    {recentWorkoutPlan.workoutPlan.map((workoutDay, index) => (
                        <Card className="mt-2" key={index}>
                            <Card.Body>
                                <Card.Title>{workoutDay.muscleGroup}</Card.Title>
                                {workoutDay.exercises.map((exercise, exerciseIndex) => (
                                    <div key={exerciseIndex}>
                                        <p>Exercise: {exercise.exercise}</p>
                                        <p>Reps: {exercise.reps}</p>
                                        <p>Sets: {exercise.sets}</p>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default Home;
