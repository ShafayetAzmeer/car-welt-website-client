import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreItem = (props) => {
    
    const {_id, image,name,description, price} = props.exploreItems;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="h-50" src={image} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        <h4 className="text-success mb-3"> Price : ${price}</h4>
                        <Link to ={`/explorePurchase/${_id}`}>
                            <button className="btn btn-primary">Purchase</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ExploreItem;