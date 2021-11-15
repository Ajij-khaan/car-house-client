import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])


    const handleDelete = id => {
        const r = window.confirm("Do you really want to Sign Out?");
        if (r === true) {
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
    }

    return (
        <Container>
            <h1 className='text-uppercase my-5 fw-bold fs-3 text-primary'>Order History</h1>
            <p className="text-start">Found: <span className="fw-bold">{allOrders.length}</span> orders</p>
            {
                allOrders.map(order =>
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
                            <p className='fs-6 text-dark fw-bold text-end'>Arrives Tommorow</p>
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

export default ManageAllOrder;