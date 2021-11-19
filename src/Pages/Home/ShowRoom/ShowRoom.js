import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowRoom = (props) => {
    const {image,name,description} = props.showRooms;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        
                            <button className="btn btn-primary">View On Google Map</button>
        
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowRoom;