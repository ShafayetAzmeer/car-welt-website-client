import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReviewDisplayItem from '../ReviewDisplayItem/ReviewDisplayItem';

const ReviewDisplay = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
      fetch('https://fierce-lake-25951.herokuapp.com/reviewDisplay')
          .then(res => res.json())
          .then(data => setReviews(data));
    }, [])  

  return (
      <Container id="showRooms">
      <div className="Container Fluid">
          <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">User Reviews</h2>
          <Row xs={1} md={3} className="g-4 gs-4">
              {
                  reviews.map(review => <ReviewDisplayItem
                  reviews = {review}
                  ></ReviewDisplayItem> )
              }
          </Row> 
      </div>
  </Container>    
  );
};

export default ReviewDisplay;