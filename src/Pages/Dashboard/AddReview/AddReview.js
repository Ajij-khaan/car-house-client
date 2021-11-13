import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const newOrder = { name: data.name, email: data.email, shipping: data.address, carDetails: car[0] };
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="Name" defaultValue={user?.displayName} className='p-3 border-2 border-danger mb-3 w-100 mt-3' />

                <input {...register("email",)} placeholder="Email" defaultValue={user?.email} className='p-3 border-2 border-danger mb-3 w-100' />

                <input {...register("address",)} placeholder="Shipping Address" className='p-3 border-2 border-danger mb-3 w-100' />

                <br />
                <input type="submit" value="Book Now" className='btn btn-danger text-white fw-bold px-5 w-100' />
            </form>
        </div>
    );
};

export default AddReview;