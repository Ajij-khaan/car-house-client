import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';


const cars = [
    {
        id: 1,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    },
    {
        id: 2,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    },
    {
        id: 3,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    },
    {
        id: 4,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    },
    {
        id: 5,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    },
    {
        id: 6,
        name: "Audi",
        model: "Audi Lol",
        price: "17000",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dicta ad, blanditiis cupiditate consequuntur libero, enim expedita facere error a. Assumenda eaque fugit nemo provident quidem dolore atque repudiandae!",
        img: "https://i.ibb.co/XbzT1zT/1.jpg"

    }
]


const Cars = () => {
    return (
        <div>
            <div className="bg-light" >
                <h1 id="popular-tours" className="font-body fw-bold mb-4 pt-5 fs-1 text-danger">MOST POPULAR Car</h1>
                <Container className="mb-5">
                    <Row id="services" xs={1} md={2} lg={3} className="g-4 mt-5border-primary">
                        {
                            cars.map(car => <Car key={car.id} car={car}></Car>)
                        }
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Cars;