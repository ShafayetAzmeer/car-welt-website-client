import React from 'react';
import { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Nav, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        // alert("Successfully Logged in");
        e.preventDefault();
    }

    return (
        
        <Container className="d-flex flex-column align-items-center ">

        <h1 className="text-primary mt-5 mb-5"> Please Login</h1>
            
            {!isLoading && 
                <form onSubmit={handleLogin} className="w-50">
                    <FloatingLabel 
                        controlId="floatingInput"
                        label="Your Email "
                        className="mb-4"
                    >
                        <Form.Control type="email" 
                        name = "email"
                        onBlur={handleOnBlur}
                        placeholder="name@example.com" />
                    </FloatingLabel>
                    
                    <FloatingLabel 
                        controlId="floatingPassword" 
                        label="Your Password"
                        className="mb-4"
                    >
                        <Form.Control type="password"
                        name = "password"
                        onBlur={handleOnBlur}
                        placeholder="Password" />
                    </FloatingLabel>

                    <button type="submit" className="btn btn-primary mt-3 mb-4 px-5 mx-5 fs-5 ">Login</button>

                    <Nav.Link as={Link} to="/register" className="text-primary fs-4">New User ? Please Register</Nav.Link>
                </form>}
                
            {isLoading &&  
                <div className="mt-5 mb-5">
                    <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Your Requested Page Is Loading</h1>
                    <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Please Wait For A While</h1>
                    <Spinner className="mt-5 mb-5" animation="border" variant="primary" />
                </div>}

            {user?.email && 
                [  'success',].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      Successfully Registered !
                    </Alert>
                ))
            }

            {authError && 
                ['danger',].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      {authError}
                    </Alert>
                ))
            }
        </Container>
    );
};

export default Login;