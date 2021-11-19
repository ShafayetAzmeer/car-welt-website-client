import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
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
                                <Link to={`${url}/pay`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}>Pay</Link>
                            </li>
                            
                            <li className="mb-4">
                                <Link to={`${url}/myOrders`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >My Orders</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`${url}/review`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Review</Link>
                            </li>
                        </div>}

                       {admin && <div>
                            <li className="mb-4"> 
                                <Link to={`${url}/manageAllOrders`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Manage All Orders</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`${url}/addAProduct`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Add A Product</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`${url}/makeAdmin`} style={{ 
                                    color: 'white',
                                    textDecoration: 'none' 
                                }}
                                >Make Admin</Link>
                            </li>

                            <li className="mb-4">
                                <Link to={`${url}/manageProducts`} style={{ 
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
                    <Switch>
                        <Route exact path={path}>
                            <h3 className="text-primary mt-5 fs-1 fw-bold"
                            >Please select from dashboard</h3>
                        </Route>

                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>

                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>

                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>

                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>

                        <Route path={`${path}/addAProduct`}>
                            <AddAProduct></AddAProduct>
                        </Route>

                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>
                
            </div>

    );
};

export default Dashboard;