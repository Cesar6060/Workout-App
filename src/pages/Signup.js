import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { error, signup } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmedPassword) {
            setPasswordError("Passwords do not match");
            return;
        }

        setPasswordError("");
        signup(email, password);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email-group">
                                <Form.Label htmlFor="email-input">Email</Form.Label>
                                <Form.Control id="email-input" type="email" onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                            <Form.Group id="password-group">
                                <Form.Label htmlFor="password-input">Password</Form.Label>
                                <Form.Control id="password-input" type="password" onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group id="confirm-password-group">
                                <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
                                <Form.Control id="confirm-password-input" type="password" onChange={(e) => setConfirmedPassword(e.target.value)} required />
                            </Form.Group>
                            <Button className="w-100" type="submit">Sign Up</Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/login">Log In</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};






//     return (
//         <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
//             <div className="w-100" style={{ maxWidth: "400px" }}>
//                 <Card>
//                     <Card.Body>
//                         <h2 className="text-center mb-4">Sign Up</h2>
//                         {error && <Alert variant="danger">{error}</Alert>}
//                         {passwordError && <Alert variant="danger">{passwordError}</Alert>}
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group id="email">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
//                             </Form.Group>
//                             <Form.Group id="password">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
//                             </Form.Group>
//                             <Form.Group id="confirm-password">
//                                 <Form.Label>Confirm Password</Form.Label>
//                                 <Form.Control type="password" onChange={(e) => setConfirmedPassword(e.target.value)} required />
//                             </Form.Group>
//                             <Button className="w-100" type="submit">Sign Up</Button>
//                         </Form>
//                         <div className="w-100 text-center mt-2">
//                             Already have an account? <Link to="/login">Log In</Link>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </Container>
//     );
// };


