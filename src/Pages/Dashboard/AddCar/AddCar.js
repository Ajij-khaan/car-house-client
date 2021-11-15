import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Shared/Navigation/Navigation';

const AddCar = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
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
                    console.log(data);
                    alert('successfully added the car');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="bg-light mt-3 py-3 text-start">
                <form onSubmit={handleSubmit(onSubmit)} className=" ps-3 my-3">
                    <div className="fw-bold text-primary">Add a New Car</div>

                    <p className="mt-3">Car Name <span className="text-danger fw-bold">*</span></p>
                    <input {...register("name", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <p className="mt-3">Publish Year <span className="text-danger fw-bold">*</span></p>
                    <input {...register("year", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <p className="mt-3">Description <span className="text-danger fw-bold">*</span></p>
                    <input {...register("description", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <p className="mt-3">Milage <span className="text-danger fw-bold">*</span></p>
                    <input {...register("milage", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <p className="mt-3">Engine <span className="text-danger fw-bold">*</span></p>
                    <input {...register("engine", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />


                    <p className="mt-3">Price <span className="text-danger fw-bold">*</span></p>
                    <input {...register("price", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <p className="mt-3">Img Url <span className="text-danger fw-bold">*</span></p>
                    <input {...register("img", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                    <br />

                    <input type="submit" className=" btn btn-primary rounded-pill px-5 mt-3" />
                </form>
            </div>
        </div>
    );
};

export default AddCar;