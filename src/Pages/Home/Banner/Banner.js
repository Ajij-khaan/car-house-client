import React from 'react';
import { Carousel } from 'react-bootstrap';



const car1 = "https://i.ibb.co/3NPGRrd/C-3.jpg";
const car2 = "https://i.ibb.co/t8jV43J/C-1-copy.jpg";
const car3 = "https://i.ibb.co/cwcz3SB/C-1.jpg";

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item className="sticky-top">
                <Carousel.Caption >

                    <h3 className="text-uppercase fw-bold">The king of the road is here</h3>
                    <p>This is  designed to travel at high speed for taking part in motor car races.</p>
                </Carousel.Caption>
                <img
                    className="d-block w-100"
                    src={car1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-uppercase fw-bold">High Performance & Outstanding Technology Combined</h3>
                    <p>Enjoy your long drive with this beautiful car.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="text-uppercase fw-bold">We Have Everything your card needs.</h3>
                    <p>Get your best car from us.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;