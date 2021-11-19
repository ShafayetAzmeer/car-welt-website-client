import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth'

const Purchase = () => {

    const { productID } = useParams();
    const [purchase, setPurchase] = useState({});
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:7000/productDetail/${productID}`)
          .then((res) => res.json())
          .then((data) => setPurchase(data));
      }, []);
  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
       data.email = user.email;
       data.status = "Order Pending";

       fetch("http://localhost:7000/confirmPurchase", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => 
            {
                if (result.insertedId){
                    alert("Order has confirmed")
                    reset();
                }
            });
      };

    return (
        <Container>
        <h1 className="text-primary mt-3 mb-3 fw-bold">Purchase Your Car</h1>

        <hr className="text-primary fw-bolder fs-3 mb-4"/>

        <hr className="text-primary fw-bolder fs-3 mb-4"/>

        <div>
            <div className="row container">
            <div className="col-md-6">
            {purchase?.name &&
                <h2 className="mb-4 text-primary">Selected Car</h2>}
            <Row xs={1} md={1} className="g-4 gs-5">
            <Col>
                { purchase?.name &&
                    <Card>
                    <Card.Img variant="top" className="h-50 p-3" src={purchase?.image} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold pb-2 text-primary">{purchase?.name}</Card.Title>
                        <Card.Text>
                            <p className="fs-5"> {purchase?.description}</p>

                            <h4 className="text-success fw-bold"> Price: ${purchase?.price}</h4>

                        </Card.Text>
                    </Card.Body>
                </Card>}
            </Col>
            </Row> 
            
            </div>

            <div className="col-md-6">
                <h2 className="mb-4 text-primary">Please Fill The Form</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("userName", { required: true })}
                    defaultValue={user?.displayName}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("image", { required: true })}
                    defaultValue={purchase?.image}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("name",  { required: true })}
                    placeholder="Name of Car"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("address")}
                    placeholder="Address"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="p-2 m-2 w-100"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Confirm Order"
                    className="btn btn-primary mt-3 w-50"
                />
                </form>
            </div>
            </div>
        </div>
        </Container>
    );
};

export default Purchase;