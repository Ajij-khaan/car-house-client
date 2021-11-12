import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';


const Cars = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div>
            <div className="bg-light" >
                <h1 id="popular-tours" className="font-body fw-bold mb-4 pt-5 fs-1 text-danger">MOST POPULAR Car</h1>
                <Container className="mb-5">
                    <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                        {
                            cars.map(car => <Car key={car._id} car={car}></Car>)
                        }
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Cars;