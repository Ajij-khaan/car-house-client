import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-falls-57067.herokuapp.com/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const myOrder = allOrders.filter(order => order?.email === user?.email);

    const handleDelete = id => {
        const r = window.confirm("Do you really want to Sign Out?");
        if (r === true) {

            fetch(`https://murmuring-falls-57067.herokuapp.com/manageorder/${id}`, {
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

    }

    console.log(myOrder);

    return (
        <Container>
            <div className="fw-bold text-primary mt-3">Order History</div>
            <p className="text-start">Found: <span className="fw-bold">{myOrder.length}</span> orders</p>
            {
                myOrder.map(order =>
                    <Row className="bg-light border-3 border-start border-primary p-5 mb-4">
                        <Col xs={12} md={6} className="rounded py-3 shadow-sm border" style={{ backgroundColor: "white" }}>
                            <div className="d-flex justify-content-start">
                                <img src={order?.carDetails?.img} alt="" className="w-25" />
                                <div>
                                    <p className='fs-6 text-dark fw-bold mt-2 text-start ms-3'>#{order._id}</p>
                                    <h1 className='fs-6 text-dark pt-1 text-start ms-3'>{order?.name}</h1>
                                    <h1 className='fs-6 text-dark pt-1 text-start ms-3'>{order?.email}</h1>
                                    <h1 className='fs-6 text-dark pt-1 text-start ms-3'>Shipping Address: {order.shipping}</h1>
                                </div>
                            </div>

                        </Col>
                        <Col xs={12} md={6}>
                            <p className='fs-6 text-dark fw-bold text-end'>Arrives Tomorrow</p>
                            <p className='fs-6 text-dark text-end'>7AM - 7PM</p>


                            <p className='fs-6 text-dark fw-bold text-end'>Total: ${order?.carDetails?.price}</p>
                            <div className="text-end">

                                <button onClick={() => handleDelete(order._id)} className=' btn btn-primary fw-bold w-50 rounded-pill'>Delete Order</button>

                            </div>
                        </Col>
                    </Row>
                )
            }

        </Container>
    );
};

export default MyOrder;