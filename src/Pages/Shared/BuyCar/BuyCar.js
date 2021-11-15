import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const BuyCar = () => {
    const { orderId } = useParams();
    const [cars, setCars] = useState([]);
    const { user } = useAuth();

    useEffect(() => {

        fetch(`https://murmuring-falls-57067.herokuapp.com/cars/`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const car = cars.filter(car => orderId === car._id)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const newOrder = { name: data.name, email: data.email, shipping: data.address, carDetails: car[0] };
        console.log(newOrder);

        fetch('https://murmuring-falls-57067.herokuapp.com/manageorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the Ca');
                    reset();
                }
            })
    }

    return (
        <>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Navigation></Navigation>
            </div>
            <Container>
                <Row>

                    <Col md={6}>
                        <Card className="p-3 bg-light shadow-sm">
                            <Card.Header className="text-start fw-bold py- fs-5">{car[0]?.name}</Card.Header>

                            <Card.Img variant="top" src={car[0]?.img} />

                            <Card.Body >
                                <Card.Text className="d-flex justify-content-between">
                                    <div className=" fs-6 ">
                                        Milage:<span className="text-dark fw-bold"> {car[0]?.milage}</span>
                                    </div>
                                    <Card.Text className=" fs-6 ">
                                        Year:<span className="text-dark fw-bold"> {car[0]?.year}</span>
                                    </Card.Text>
                                </Card.Text>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Text className=" fs-6 text-start ">
                                        Engine:<span className="text-dark fw-bold"> {car[0]?.engine.slice(0, 20)}</span>
                                    </Card.Text>

                                    <Card.Text className="fs-6 ">
                                        <span className="text-dark fw-bold ">Price:  {car[0]?.price}</span>
                                    </Card.Text>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-dark p-5 h-100">
                            <input {...register("name",)} placeholder="Name" defaultValue={user?.displayName} className='p-3 border-2 border-primary mb-3 w-100 mt-3' />

                            <input {...register("email",)} placeholder="Email" defaultValue={user?.email} className='p-3 border-2 border-primary mb-3 w-100' />

                            <input {...register("address",)} placeholder="Shipping Address" className='p-3 border-2 border-primary mb-3 w-100' />

                            <br />
                            <input type="submit" value="Place Order" className='btn btn-primary text-white fw-bold px-5 w-100' />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );

};
export default BuyCar;