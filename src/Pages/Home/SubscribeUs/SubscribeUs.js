import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const SubscribeUs = () => {
    return (
        <div>
            <div className="bg-image" style={{
                background: `url('https://wallpaperaccess.com/full/261301.jpg')`, backgroundRepeat: "no-repeat", width: '100%', backgroundPosition: 'center'
            }}>
                <div className=" py-5 mt-5">
                    <p className="text-white fs-3 text text-uppercase fw-bold">Subscribe us to get 25% discount</p>
                    <Container className="d-flex justify-content-center bg- py-5 rounded">
                        <Row xs={1} md={3}>
                            <Col>
                                <InputGroup >
                                    <FormControl className="p-3 rounded-pill"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="Name"
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup >
                                    <FormControl className="p-3 rounded-pill"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="Email"
                                    />
                                </InputGroup>
                            </Col>
                            <Col className="text-start">
                                <Button variant="primary" className="btn btn-primary rounded-pill align-start p-3">Subscribe Us</Button>
                            </Col>
                        </Row>
                    </Container >
                </div>
            </div>
        </div>
    );
};

export default SubscribeUs;