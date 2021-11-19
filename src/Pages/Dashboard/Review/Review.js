import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
       data.email = user.email;

       fetch("http://localhost:7000/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => 
            {
                if (result.insertedId){
                    alert("Review added successfully")
                    reset();
                }
            });
      };

    return (
        <Container className="w-50">
            <h1 className="text-primary mt-3 mb-3 fw-bold">Please Review </h1>

            <hr className="text-primary fw-bolder fs-3 mb-4"/>

            <hr className="text-primary fw-bolder fs-3 mb-4"/>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", { required: true })}  
                        defaultValue={user?.email}
                        className="p-2 m-2 w-100"
                    />
                    <br />

                    <input
                        {...register("userName", { required: true })}
                        placeholder="Your Name"
                        defaultValue={user?.displayName}
                        className="p-2 m-2 w-100"
                    />
                    <br />

                    <input
                        {...register("rating",  { required: true })}
                        placeholder="A Number Between 0-5"
                        className="p-2 m-2 w-100"
                    />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary fs-4 mt-3 w-50"
                    />
                    </form>
        </Container>
    );
};

export default Review;