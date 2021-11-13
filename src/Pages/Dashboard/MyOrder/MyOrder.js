import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';


const MyOrder = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    console.log(allOrders);

    const myOrder = allOrders.filter(order => order?.email === user?.email);
    console.log(myOrder);


    const handleDelete = id => {

        fetch(`http://localhost:5000/manageorder/${id}`, {
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
                    const remain = allOrders.filter(order => order?._id !== id);
                    setAllOrders(remain);
                }
            })
    }

    return (

        <Container>
            <Navigation></Navigation>
            <div>
                <h1 className='text-uppercase my-5 fw-bold fs-1 text-danger'>My order</h1>
                {
                    myOrder.map(order =>

                        <div className='border border-danger rounded border-3 border-start-0 border-end-0 border-bottom-0 bg-light mb-5'>
                            <Row className='d-flex justify-content-between p-3'>
                                <Col xs={12} md={3}>
                                    <h1 className='fs-6 text-dark'>Order ID: <br />{order._id}</h1>
                                </Col>
                                <Col xs={12} md={3}>
                                    <h1 className='fs-6 text-dark'>{order?.name}</h1>
                                    <h1 className='fs-6 text-dark'>{order?.email}</h1>
                                </Col>
                                <Col xs={12} md={3}>
                                    <h1 className='fs-6 text-dark'>Shipping Address: <br />{order.shipping}</h1>
                                </Col>
                            </Row>
                            <h3 className='text-danger fs-5 text-uppercase'> Order Summary</h3>
                            <Row>
                                <Col xs={6} md={12} className='d-flex mt-3'>
                                    <img src={order?.orderDetails?.img} alt="" className='w-50 text-dark' />
                                    <div className='ms-3 d-flex align-items-center felx-column'>
                                        <div>

                                            <p className='fs-3 fw-bold text-uppercase text-dark'>{order?.orderDetails?.name}</p>
                                            <div>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div className='d-flex align-items-center'>
                                                        <p className='fw-bold text-danger fs-3'>$ {order?.orderDetails?.price}</p>
                                                        <p className='fs-5 mt-2 text-muted fw-bold ms-2'>/Per Person</p>
                                                    </div>
                                                    <p className='fs-5 mt-2 ms-3 fw-bold text-dark'>{order?.orderDetails?.Duration}</p>
                                                </div>
                                                <button onClick={() => handleDelete(order._id)} className='w-50 btn btn-danger fw-bold w-100'>Delete Order</button>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default MyOrder;