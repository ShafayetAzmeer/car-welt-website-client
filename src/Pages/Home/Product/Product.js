import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {_id, image,name,description} = props.products;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="h-50" src={image} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        <Link to ={`/purchase/${_id}`}>
                            <button className="btn btn-primary">Purchase</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;