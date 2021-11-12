import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const BuyCar = () => {
    const { orderId } = useParams();
    const [cars, setCars] = useState([]);
    const { user } = useAuth();


    useEffect(() => {

        fetch(`http://localhost:5000/cars/`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const car = cars.filter(car => orderId === car._id)
    console.log(car)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const newOrder = { name: data.name, email: data.email, shipping: data.address };
        console.log(newOrder);

        fetch('http://localhost:5000/manageorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    reset();
                }
            })
    }

    return (
        <>
            <Col>
                <Card className="border-1 ">
                    <Card.Img variant="top" src={car[0]?.img} />
                    <Card.Body>
                        <Card.Title className='fs-5 fw-bold text-dark'>{car[0]?.name}</Card.Title>
                        <div className='d-flex justify-content-center'>
                            <div className='mx-3 d-flex justify-content-center'>
                                <p className='text-danger fw-bold fs-3'>${car[0]?.price}</p>
                                <p className='mt-2 text-muted fw-bold'>/ Per Person</p>
                            </div>
                        </div>
                        <Card.Text className='text-dark'>{car[0]?.description.slice(0, 200)}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="Name" defaultValue={user?.displayName} className='p-3 border-2 border-danger mb-3 w-100 mt-3' />

                <input {...register("email",)} placeholder="Email" defaultValue={user?.email} className='p-3 border-2 border-danger mb-3 w-100' />

                <input {...register("address",)} placeholder="Shipping Address" className='p-3 border-2 border-danger mb-3 w-100' />

                <br />
                <input type="submit" value="Book Now" className='btn btn-danger text-white fw-bold px-5 w-100' />
            </form>
        </>
    );

};
export default BuyCar;