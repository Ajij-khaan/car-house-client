import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
const fullStar = <FontAwesomeIcon icon={faStar} />
const halfStar = "far fa-star"
// const faSarSharp = <FontAwesomeIcon icon={faStarAndCrescent} />

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 className="fs-1 fw-bold text-primary my-5">FROM OUR OUR CLIENTS</h1>

            <Container className="mb-5">
                <Row id="services" xs={1} md={2} lg={2} className="g-4 mt-5border-primary">
                    {
                        reviews.map(review =>
                            <Col>
                                <Card className="p-3 bg-light shadow-sm">
                                    <Row className="d-flex justify-content-center">
                                        <Card.Img variant="top" src={review.profileImgUrl} className="w-25 rounded-circle" />
                                    </Row>
                                    <Card.Body className="">
                                        <Card.Text className=" text-center d-flex text-start flex-column">
                                            <p className="fw-bold text-primary">{review.name}</p>
                                            <p className="text-muted fw-bold">{review.position}</p>
                                            <p>{review.comment.slice(0, 150)}</p>
                                            <div className=" fs-6 ">
                                                <Rating
                                                    fullSymbol={fullStar}
                                                    emptySymbol={halfStar}
                                                    initialRating={review.Rating}
                                                    readonly
                                                />
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Reviews;