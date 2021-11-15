import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageCars = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-falls-57067.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDelete = id => {
        const r = window.confirm("Do you really want to Sign Out?");
        if (r === true) {
            fetch(`https://murmuring-falls-57067.herokuapp.com/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount !== 0) {
                        alert('deleted Successfully');
                        console.log(data);
                        const remain = cars.filter(order => order?._id !== id);
                        setCars(remain);
                    }
                })
        }
    }
    return (
        <div>
            <Container className="mb-5">
                <Row xs={1} md={2} lg={2} className="g-4 mt-5border-primary">
                    {
                        cars.map(car =>
                            <Col>
                                <Card className="p-3 bg-light shadow-sm">
                                    <Card.Header className="text-start fw-bold py- fs-5">{car.name}</Card.Header>

                                    <Card.Img variant="top" src={car.img} />

                                    <Card.Body >
                                        <Card.Text className="d-flex justify-content-between">
                                            <div className=" fs-6 ">
                                                Milage:<span className="text-dark fw-bold"> {car.milage}</span>
                                            </div>
                                            <Card.Text className=" fs-6 ">
                                                Year:<span className="text-dark fw-bold"> {car.year}</span>
                                            </Card.Text>
                                        </Card.Text>
                                        <Card.Text className=" fs-6 text-start ">
                                            Engine:<span className="text-dark fw-bold"> {car.engine.slice(0, 20)}</span>
                                        </Card.Text>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <Card.Text className=" fs-6 text-start ">
                                                <span className="text-dark fw-bold fs-4"> {car.price}</span>
                                            </Card.Text>
                                            <button onClick={() => handleDelete(car._id)} className="w-50 btn btn-danger fw-bold rounded-pill px-2">Delete Car</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageCars;