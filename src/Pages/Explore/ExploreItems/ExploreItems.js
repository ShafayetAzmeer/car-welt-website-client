import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreItem from '../ExploreItem/ExploreItem';

const ExploreItems = () => {
    const [exploreItems, setExploreItems] = useState([]);

      useEffect(()=> {
        fetch("https://fierce-lake-25951.herokuapp.com/allProduct")
            .then(res => res.json())
            .then(data => setExploreItems(data));
      }, []) 

    return (
        <Container id="explore">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Explore Products</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        exploreItems.map(exploreItem => <ExploreItem
                        // key={exploreItem._id}
                        exploreItems = {exploreItem}
                        ></ExploreItem> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default ExploreItems;