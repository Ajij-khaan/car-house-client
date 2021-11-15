import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import {
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import PrivateRoute from '../../Authentication/PrivateRoute/PrivateRoute';
import AddCar from '../AddCar/AddCar';

import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';



const Dashboard = () => {



    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();

    return (

        <div className="">
            <Row className="bg-light" style={{ backgroundColor: "white" }}>
                <Col sm={6} md={4} className=" py-5 border-2 border-end">
                    <h1 className="text-start fs-6 ms-5 fw-bold ms-3">{user.displayName}</h1>
                    <h1 className="text-start fs-6 ms-5  ms-3">{user.email}</h1>

                </Col>
                <Col sm={6} md={8}>
                    <h1 className="text-start fs-3 ps-5 py-5 fw-bold">Dashboard</h1>
                </Col>
            </Row>

            <Row style={{ height: '100vh' }} >
                <Col md={4} className="border-2 border-end h-100" >
                    <div className="ms-5 pt-5">
                        <div>
                            <Link to="/home" className="text-decoration-none fw-bold text-muted text-start"><p>HOME</p></Link>
                            <Link to={`${url}/myorder`} className="text-decoration-none fw-bold text-muted text-start"><p>MY ORDER</p></Link>
                            <Link to={`${url}/addreview`} className="text-decoration-none fw-bold text-muted text-start"> <p>ADD REVIEW</p></Link>
                            <Link to={`${url}/addcar`} className="text-decoration-none fw-bold text-muted text-start"><p>ADD CAR</p></Link>
                            <Link to={`${url}/myorder`} className="text-decoration-none fw-bold text-muted text-start"><p>MANAGE PRODUCTS</p></Link>
                            <Link to={`${url}/manageAllOrder`} className="text-decoration-none fw-bold text-muted text-start"><p>MANAGE ALL ORDER</p></Link>
                            {
                                admin &&
                                <Link to={`${url}/makeadmin`} className="text-decoration-none fw-bold text-muted text-start"><p>MAKE ADMIN</p></Link>
                            }
                        </div>

                    </div>
                </Col>
                <Col md={8}>

                    <Switch>

                        <PrivateRoute exact path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/manageAllOrder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </PrivateRoute>
                        <PrivateRoute exact path={`${path}/myorder`}>
                            <MyOrder></MyOrder>
                        </PrivateRoute>
                        <PrivateRoute exact path={`${path}/addcar`}>
                            <AddCar></AddCar>
                        </PrivateRoute>

                    </Switch>
                </Col>
            </Row>

        </div >
    );
};

export default Dashboard;