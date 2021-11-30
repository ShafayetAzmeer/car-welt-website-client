import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import {
    Outlet,
    Link
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const {admin, logout} = useAuth();

    return (
            <div className="row">
                <div style={{
                    backgroundColor: 'blueviolet', 
                    color:'white',
                    listStyle:'none',
                    cursor:'default',
                    height:'150vh'
                    }} 
                    className="col-md-3">

                    <h1 className="mt-3 pt-3 pb-3 ">Dashboard</h1>

                    <hr className="mt-1 pt-1 text-light"/>

                    <div style={{
                        color: 'white',
                        cursor:'pointer',
                        textDecoration:'none'
                        }} 
                        className="p-2 fs-2 mt-3"
                        >

                        {!admin && <div>
                            <li className="mb-4">
                                <Link to={`/dashboard/pay`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}>Pay</Link>
                            </li>
                            
                            <li className="mb-4">
                                <Link to={`/dashboard/myOrders`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >My Orders</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`/dashboard/review`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Review</Link>
                            </li>
                        </div>}

                       {admin && <div>
                            <li className="mb-4"> 
                                <Link to={`/dashboard/manageAllOrders`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Manage All Orders</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`/dashboard/addAProduct`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Add A Product</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`/dashboard/makeAdmin`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Make Admin</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`/dashboard/manageProducts`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Manage Products</Link>
                            </li>
                        </div>}

                        <li>
                            <Button onClick={logout} variant="light" className="fs-3">Logout</Button>
                        </li>

                        

                    </div>
                </div>

                <div style={{backgroundColor: 'none' }} className="col-md-9 text-center">
                    <Outlet>
                       
                    </Outlet>
                </div>
                
            </div>

    );
};

export default Dashboard;