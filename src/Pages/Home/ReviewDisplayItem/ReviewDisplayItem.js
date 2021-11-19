import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewDisplayItem = (props) => {
    const {userName, rating} = props.reviews;

    return (
        <Col>
            <Card>
                    <Card.Body>
                    <Card.Text>
                        <h1 className="fs-2"> {userName}</h1>
                        <Rating 
                            style={{
                                color:'gold',
                                }}
                            className="fs-2"
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReviewDisplayItem;