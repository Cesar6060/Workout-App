import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Schedule.css';
const Schedule = ({ setSchedule }) => {
    const [chestTime, setChestTime] = useState('');
    const [backTime, setBackTime] = useState('');
    const [legsTime, setLegsTime] = useState('');
    const [shouldersTime, setShouldersTime] = useState('');
    const [chestDays, setChestDays] = useState([]);
    const [backDays, setBackDays] = useState([]);
    const [legsDays, setLegsDays] = useState([]);
    const [shouldersDays, setShouldersDays] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const schedule = [
            { title: 'Chest and Triceps', time: chestTime, days: chestDays },
            { title: 'Back and Biceps', time: backTime, days: backDays },
            { title: 'Legs', time: legsTime, days: legsDays },
            { title: 'Shoulders', time: shouldersTime, days: shouldersDays },
        ];


        setSchedule(schedule);
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
                <Form onSubmit={handleFormSubmit} data-testid="schedule-form"></Form>
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












// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import axios from 'axios';

// const Schedule = () => {
//     const [schedule, setSchedule] = useState([]);

//     useEffect(() => {
//         // fetch schedule data here
//         axios.get('your-api-endpoint')
//             .then(res => setSchedule(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const renderSchedule = (day) => {
//         return schedule[day].map((exercise, index) => <ListGroup.Item key={index}>{exercise}</ListGroup.Item>);
//     };

//     return (
//         <Container>
//             <Row>
//                 <Col md={12} className="d-flex justify-content-center">
//                     <h2>Schedule</h2>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col md={6} className="d-flex justify-content-center">
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Header>Leg Day</Card.Header>
//                         <ListGroup variant="flush">
//                             {renderSchedule('legDay')}
//                         </ListGroup>
//                     </Card>
//                     {/* Repeat for other workout days */}
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Schedule;



// import React from 'react';
// import { Container, Table } from 'react-bootstrap';

// const Schedule = () => {
//     return (
//         <Container>
//             <h2 className="text-center my-4">Workout Schedule</h2>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Day</th>
//                         <th>Workout</th>
//                         <th>Duration (mins)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Monday</td>
//                         <td>Cardio</td>
//                         <td>45</td>
//                     </tr>
//                     <tr>
//                         <td>Tuesday</td>
//                         <td>Upper Body Strength</td>
//                         <td>60</td>
//                     </tr>
//                     <tr>
//                         <td>Wednesday</td>
//                         <td>Yoga</td>
//                         <td>30</td>
//                     </tr>
//                     <tr>
//                         <td>Thursday</td>
//                         <td>Lower Body Strength</td>
//                         <td>60</td>
//                     </tr>
//                     <tr>
//                         <td>Friday</td>
//                         <td>Cardio</td>
//                         <td>45</td>
//                     </tr>
//                     <tr>
//                         <td>Saturday</td>
//                         <td>Rest Day</td>
//                         <td>-</td>
//                     </tr>
//                     <tr>
//                         <td>Sunday</td>
//                         <td>Rest Day</td>
//                         <td>-</td>
//                     </tr>
//                 </tbody>
//             </Table>
//         </Container>
//     );
// };

// export default Schedule;
