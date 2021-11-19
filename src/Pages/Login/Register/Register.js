import React from 'react';
import { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Nav, Spinner } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [registerData, setRegisterData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        //console.log(field, newRegisterData);
        setRegisterData(newRegisterData);
    }

    const handleRegister = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        // console.log(registerData.email, registerData.password);       
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();
    }

    return (
        <Container className="d-flex flex-column align-items-center ">

        <h1 className="text-primary mt-5 mb-5"> Please Register</h1>
            
            {!isLoading && 
                <form  onSubmit={handleRegister} className="w-50">
                    <FloatingLabel 
                        controlId="floatingInput"
                        label="Your Name "
                        className="mb-4"
                    >
                        <Form.Control 
                        // type="email" 
                        name = "name"
                        onBlur={handleOnBlur}
                        placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel 
                        controlId="floatingInput"
                        label="Your Email "
                        className="mb-4"
                    >
                        <Form.Control 
                        type="email" 
                        name = "email"
                        onBlur={handleOnBlur}
                        placeholder="name@example.com" />
                    </FloatingLabel>
                    
                    <FloatingLabel 
                        controlId="floatingPassword" 
                        label="Your Password"
                        className="mb-4"
                    >
                        <Form.Control 
                        type="password"
                        name = "password"
                        onBlur={handleOnBlur}
                        placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel 
                        controlId="floatingPassword" 
                        label="Re-type Your Password"
                        className="mb-4"
                    >
                        <Form.Control 
                        type="password"
                        name = "password2"
                        onBlur={handleOnBlur}
                        placeholder="Password" />
                    </FloatingLabel>

                    <button type="submit" className="btn btn-primary mt-3 mb-4 px-5 mx-5 fs-5 ">Register</button>

                    <Nav.Link as={Link} to="/login" className="text-primary fs-4">Already Registered ? Please Login</Nav.Link>
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
                [  'danger',].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      {authError}
                    </Alert>
                ))
            }
        </Container>
    );
};

export default Register;