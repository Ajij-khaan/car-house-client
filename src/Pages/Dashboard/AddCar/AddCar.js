import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';

const AddCar = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);

        const newCar = { name: data.name, year: data.year, price: data.price, description: data.description, milage: data.milage, engine: data.engine, img: data.img };

        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the car');
                    reset();
                }
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='text-uppercase fw-bold text-danger my-5'>Please Add a Car </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="Name" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("year",)} placeholder="Publish Year" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("description",)} placeholder="Description" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("milage",)} placeholder="Milage" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("engine",)} placeholder="Engine" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("price",)} placeholder="Price" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("img",)} placeholder="Img URL" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input type="submit" />

            </form>
        </div>
    );
};

export default AddCar;