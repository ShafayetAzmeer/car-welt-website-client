import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import ShowRooms from '../ShowRooms/ShowRooms';

const Home = () => {
    const{isLoading} = useAuth();
    if(isLoading){
        return  <div className="mt-5 mb-5">
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Your Requested Page Is Loading</h1>
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Please Wait For A While</h1>
            <Spinner className="mt-5 mb-5" animation="border" variant="primary" />
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ShowRooms></ShowRooms>
            <ReviewDisplay></ReviewDisplay>
        </div>
    );
};

export default Home;