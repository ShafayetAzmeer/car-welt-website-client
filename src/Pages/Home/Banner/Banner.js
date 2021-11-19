import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1  from '../../../images/Banner/1.jpg'

const Banner = () => {
    return (
        <>
        <Carousel>
          <Carousel.Item>
              <img
              className="d-block w-100"
              src={banner1}
              alt="First slide"
              />
          </Carousel.Item>
          </Carousel>  
      </>

    );
};

export default Banner;