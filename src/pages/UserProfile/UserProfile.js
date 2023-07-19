import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>User Profile</h2>
                    <Form onSubmit={handleSubmit} data-testid="user-form">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} data-testid="name-input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} data-testid="email-input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={user.password} onChange={handleInputChange} data-testid="password-input" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;


