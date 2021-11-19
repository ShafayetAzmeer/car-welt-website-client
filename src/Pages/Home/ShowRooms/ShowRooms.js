import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowRoom from '../ShowRoom/ShowRoom';

const ShowRooms = () => {
    const [showRooms, setShowRooms] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:7000/showRooms')
          .then(res => res.json())
          .then(data => setShowRooms(data));
    }, [])  

  return (
      <Container id="showRooms">
      <div className="Container Fluid">
          <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Our Showrooms</h2>
          <Row xs={1} md={3} className="g-4 gs-4">
              {
                  showRooms.map(showRoom => <ShowRoom
                  showRooms = {showRoom}
                  ></ShowRoom> )
              }
          </Row> 
      </div>
  </Container>    
  );
};

export default ShowRooms;