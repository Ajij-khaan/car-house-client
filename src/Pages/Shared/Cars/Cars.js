import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';


const Cars = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("https://murmuring-falls-57067.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            <div className="" >
                <h1 id="popular-tours" className="font-body fw-bold mb-4 pt-5 fs-1 text-primary">MOST POPULAR CARS</h1>
                <Container className="mb-5">
                    <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                        {
                            cars.map(car => <Car key={car._id} car={car}></Car>).splice(0, 6)
                        }
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Cars;