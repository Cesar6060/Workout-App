import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
    const { logout } = useLogout();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (err) {
            console.error("Failed to log out", err);
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Workout App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/exercise">
                        <Nav.Link>Exercise</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/schedule">
                        <Nav.Link>Schedule</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/workoutplan">
                        <Nav.Link>Workout Plan</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/userprofile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Button variant="outline-info" onClick={handleLogout}>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}



