import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Schedule.css';
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";



const Schedule = () => {
    const [chestTime, setChestTime] = useState('');
    const [backTime, setBackTime] = useState('');
    const [legsTime, setLegsTime] = useState('');
    const [shouldersTime, setShouldersTime] = useState('');
    const [chestDays, setChestDays] = useState([]);
    const [backDays, setBackDays] = useState([]);
    const [legsDays, setLegsDays] = useState([]);
    const [shouldersDays, setShouldersDays] = useState([]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const scheduleCollection = collection(db, "schedule");

        // split your newSchedule array into individual items
        const newSchedule = [
            { title: 'Chest and Triceps', time: chestTime, days: chestDays },
            { title: 'Back and Biceps', time: backTime, days: backDays },
            { title: 'Legs', time: legsTime, days: legsDays },
            { title: 'Shoulders', time: shouldersTime, days: shouldersDays },
        ];


        // iterate over the newSchedule array and add each schedule to the Firestore
        for (const schedule of newSchedule) {
            try {
                const docRef = await addDoc(scheduleCollection, schedule);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    };


    const renderTimeOptions = (muscleGroup) => {
        const timeOptions = [];

        for (let hour = 0; hour < 24; hour++) {
            const startTime = `${hour.toString().padStart(2, '0')}:00`;
            const endTime = `${((hour + 1) % 24).toString().padStart(2, '0')}:00`;
            const option = (
                <option key={`${muscleGroup}-${hour}`} value={`${startTime}-${endTime}`}>
                    {`${startTime} - ${endTime}`}
                </option>
            );

            timeOptions.push(option);
        }

        return timeOptions;
    };

    const renderDayOptions = (muscleGroup) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return days.map((day) => (
            <Form.Check
                key={`${muscleGroup}-${day}`}
                type="checkbox"
                label={day}
                checked={
                    muscleGroup === 'chest'
                        ? chestDays.includes(day)
                        : muscleGroup === 'back'
                            ? backDays.includes(day)
                            : muscleGroup === 'legs'
                                ? legsDays.includes(day)
                                : shouldersDays.includes(day)
                }
                onChange={(e) => {
                    const { checked } = e.target;
                    if (muscleGroup === 'chest') {
                        setChestDays((prevDays) =>
                            checked ? [...prevDays, day] : prevDays.filter((prevDay) => prevDay !== day)
                        );
                    } else if (muscleGroup === 'back') {
                        setBackDays((prevDays) =>
                            checked ? [...prevDays, day] : prevDays.filter((prevDay) => prevDay !== day)
                        );
                    } else if (muscleGroup === 'legs') {
                        setLegsDays((prevDays) =>
                            checked ? [...prevDays, day] : prevDays.filter((prevDay) => prevDay !== day)
                        );
                    } else {
                        setShouldersDays((prevDays) =>
                            checked ? [...prevDays, day] : prevDays.filter((prevDay) => prevDay !== day)
                        );
                    }
                }}
            />
        ));
    };

    return (
        <Container>
            <h2>Schedule</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="chestTimeRange">
                    <Form.Label><span className="bold-title">Chest and Triceps</span></Form.Label>
                    <Form.Control as="select" size="sm" value={chestTime} onChange={(e) => setChestTime(e.target.value)}>
                        <option value="">Select a time range</option>
                        {renderTimeOptions('chest')}
                    </Form.Control>
                    <Form.Label></Form.Label>
                    {renderDayOptions('chest')}
                </Form.Group>

                <Form.Group controlId="backTimeRange">
                    <Form.Label><span className="bold-title">Back and Biceps</span></Form.Label>
                    <Form.Control as="select" size="sm" value={backTime} onChange={(e) => setBackTime(e.target.value)}>
                        <option value="">Select a time range</option>
                        {renderTimeOptions('back')}
                    </Form.Control>
                    <Form.Label></Form.Label>
                    {renderDayOptions('back')}
                </Form.Group>

                <Form.Group controlId="legsTimeRange">
                    <Form.Label><span className="bold-title">Legs</span></Form.Label>
                    <Form.Control as="select" size="sm" value={legsTime} onChange={(e) => setLegsTime(e.target.value)}>
                        <option value="">Select a time range</option>
                        {renderTimeOptions('legs')}
                    </Form.Control>
                    <Form.Label></Form.Label>
                    {renderDayOptions('legs')}
                </Form.Group>

                <Form.Group controlId="shouldersTimeRange">
                    <Form.Label><span className="bold-title">Shoulders</span></Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        value={shouldersTime}
                        onChange={(e) => setShouldersTime(e.target.value)}
                    >
                        <option value="">Select a time range</option>
                        {renderTimeOptions('shoulders')}
                    </Form.Control>
                    <Form.Label></Form.Label>
                    {renderDayOptions('shoulders')}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </Container>
    );
};

export default Schedule;



