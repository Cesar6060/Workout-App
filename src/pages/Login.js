import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Container, Card, Alert, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, login } = useLogin();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result) { // if login is successful, navigate to home page (modify this as per your app flow)
            navigate("/");
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email-group">
                                <Form.Label htmlFor="email-input">Email</Form.Label>
                                <Form.Control id="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Form.Group>
                            <Form.Group id="password-group">
                                <Form.Label htmlFor="password-input">Password</Form.Label>
                                <Form.Control id="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>
                            <Button className="w-100" type="submit">Log In</Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            Don't have an account? <Button variant="link" onClick={() => navigate('/signup')}>Sign Up</Button>
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
//                         <h2 className="text-center mb-4">Log In</h2>
//                         {error && <Alert variant="danger">{error}</Alert>}
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group id="email">
//                                 <Form.Label htmlFor="email">Email</Form.Label>
//                                 <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                             </Form.Group>
//                             <Form.Group id="password">
//                                 <Form.Label htmlFor="password">Password</Form.Label>
//                                 <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                             </Form.Group>
//                             <Button className="w-100" type="submit">Log In</Button>
//                         </Form>
//                         <div className="w-100 text-center mt-2">
//                             Don't have an account? <Button variant="link" onClick={() => navigate('/signup')}>Sign Up</Button>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             </div>
//         </Container>
//     );
// };
