import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = (props) => {
    const { _id, name, year, milage, price, img, engine } = props.car;
    return (
        <Col>
            <Card className="p-3 bg-light shadow-sm">
                <Card.Header className="text-start fw-bold py- fs-5">{name}</Card.Header>

                <Card.Img variant="top" src={img} />

                <Card.Body >
                    <Card.Text className="d-flex justify-content-between">
                        <div className=" fs-6 ">
                            Milage:<span className="text-dark fw-bold"> {milage}</span>
                        </div>
                        <Card.Text className=" fs-6 ">
                            Year:<span className="text-dark fw-bold"> {year}</span>
                        </Card.Text>
                    </Card.Text>
                    <Card.Text className=" fs-6 text-start ">
                        Engine:<span className="text-dark fw-bold"> {engine.slice(0, 20)}</span>
                    </Card.Text>

                    <div className="d-flex justify-content-between">
                        <Card.Text className=" fs-6 text-start ">
                            <span className="text-dark fw-bold fs-4"> {price}</span>
                        </Card.Text>
                        <Link to={`/buycar/${_id}`}>  <Button variant="primary" className="w-100 fw-bold rounded-pill px-3">Buy Car</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;