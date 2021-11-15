import React, { useState } from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Authentication/PrivateRoute/PrivateRoute';
import AddCar from '../AddCar/AddCar';

import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';



const Dashboard = () => {


    let { path, url } = useRouteMatch();

    return (

        <div>
            <h1>This is dashboard</h1>
            <Row>
                <Col md={4}>
                    <h1>Dashbard</h1>

                    <Link to={`${url}/makeadmin`}>Make Admin</Link>
                    <br />
                    <Link to={`${url}/addreview`}>Add REview</Link>
                    <br />
                    <Link to={`${url}/manageAllOrder`}>manageorder</Link>
                    <br />
                    <Link to={`${url}/myorder`}>myorder</Link>
                    <br />
                    <Link to={`${url}/addcar`}>addcar</Link>
                    <br />

                </Col>
                <Col md={8}>
                    <h1>THis is col2</h1>

                    <Switch>

                        <PrivateRoute exact path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </PrivateRoute>

                        <PrivateRoute exact path={`${path}/manageAllOrder`}>
                            <AddReview></AddReview>
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
        </div>
    );
};

export default Dashboard;