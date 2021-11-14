import Button from '@restart/ui/esm/Button';
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
import MakeAdmin from '../MakeAdmin/MakeAdmin';



const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { path, url } = useRouteMatch();

    return (

        <div>
            <h1>This is dashboard</h1>
            <Row>
                <Col md={4}>
                    <h1>Dashbard</h1>
                    <Button variant="primary" onClick={handleShow}>
                        Launch
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Link to={`${url}/makeadmin`}>Make Admin</Link>

                </Col>
                <Col md={8}>
                    <h1>THis is col2</h1>

                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        <Route path={`${path}/:makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;