import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);

        const newCar = { name: data.name, Rating: data.rating, comment: data.comment, profileImgUrl: data.profileImgUrl };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added Successfully');
                    reset();
                }
            })
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="Name" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("rating",)} placeholder="Rating" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("comment",)} placeholder="Comment" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input {...register("profileImgUrl",)} placeholder="Profile Image Url" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;