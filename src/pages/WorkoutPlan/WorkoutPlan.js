import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const WorkoutPlan = () => {
    const [muscleGroup, setMuscleGroup] = useState('');
    const [exercise, setExercise] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [muscleGroupDays, setMuscleGroupDays] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const muscleGroupDay = {
            muscleGroup,
            exercise: exercise,
            reps: reps,
            sets: sets
        };

        setMuscleGroupDays((previousDays) => {
            const existingDayIndex = previousDays.findIndex((day) => day.muscleGroup === muscleGroup);
            if (existingDayIndex !== -1) {
                const updatedDays = [...previousDays];
                updatedDays[existingDayIndex] = {
                    ...updatedDays[existingDayIndex],
                    exercises: [...updatedDays[existingDayIndex].exercises, muscleGroupDay]
                };
                return updatedDays;
            } else {
                return [
                    ...previousDays,
                    {
                        muscleGroup,
                        exercises: [muscleGroupDay]
                    }
                ];
            }
        });

        setMuscleGroup('');
        setExercise('');
        setReps('');
        setSets('');
    };

    const handleDBSubmit = async () => {
        try {
            await addDoc(collection(db, "workoutPlans"), {
                workoutPlan: muscleGroupDays,
                timestamp: new Date(),
            });
            alert('Workout plan successfully saved!');
        } catch (error) {
            alert('An error occurred while saving your workout plan.');
            console.error("Error writing document: ", error);
        }
    };


    const muscleGroupOptions = ['Biceps', 'Legs', 'Triceps', 'Back', 'Chest', 'Shoulders', 'Abs'];

    return (
        <Container>
            <h2>Workout Plan</h2>
            <Form onSubmit={handleFormSubmit} data-testid="workout-plan-form">
                <Form.Group controlId="muscleGroup">
                    <Form.Label>Muscle Group</Form.Label>
                    <Form.Control
                        as="select"
                        value={muscleGroup}
                        onChange={(e) => setMuscleGroup(e.target.value)}
                        data-testid="muscleGroup-select"
                    >
                        <option value="">Select a muscle group</option>
                        {muscleGroupOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exercise">
                    <Form.Label>Exercise</Form.Label>
                    <Form.Control
                        type="text"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        data-testid="exercise-input"
                    />
                </Form.Group>

                <Form.Group controlId="reps">
                    <Form.Label>Reps</Form.Label>
                    <Form.Control
                        type="text"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        data-testid="reps-input"
                    />
                </Form.Group>

                <Form.Group controlId="sets">
                    <Form.Label>Sets</Form.Label>
                    <Form.Control
                        type="text"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        data-testid="sets-input"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" data-testid="save-button">
                    Save
                </Button>
            </Form>

            {muscleGroupDays && muscleGroupDays.length > 0 && (
                <div>
                    <h3>Selected Muscle Group</h3>
                    <Row>
                        {muscleGroupOptions.map((option) => (
                            <Col key={option}>
                                <h4>{option}</h4>
                                {muscleGroupDays
                                    .filter((day) => day.muscleGroup === option)
                                    .map((day, index) => (
                                        <div key={index}>
                                            {day.exercises.map((exercise, exerciseIndex) => (
                                                <div key={exerciseIndex}>
                                                    <p>Exercise: {exercise.exercise}</p>
                                                    <p>Reps: {exercise.reps}</p>
                                                    <p>Sets: {exercise.sets}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            <Button variant="primary" onClick={handleDBSubmit}>
                Submit Workout Plan
            </Button>
        </Container>
    );
};

export default WorkoutPlan;



