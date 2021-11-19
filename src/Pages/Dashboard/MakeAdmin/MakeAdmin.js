import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        const user = {email};
        fetch('https://fierce-lake-25951.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })

        e.preventDefault();
    }
    return (
        <Container>
            <h1 className="text-primary mt-5 mb-5">Make Admin</h1>

            <div className="d-flex flex-column align-items-center">
            <form onSubmit={handleMakeAdmin} className="w-50">
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

                    <button type="submit" className="btn btn-primary mt-3 mb-4 px-5 mx-5 fs-5 ">Make Admin</button>

                </form>

                {success &&
                [  'success',].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      Made Admin Successfully !
                    </Alert>
                ))
                }
            </div>
        </Container>
    );
};

export default MakeAdmin;