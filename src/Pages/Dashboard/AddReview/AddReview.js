import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth();
    const [reviewSuccess, setReviewSUccess] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newCar = { name: data.name, Rating: data.rating, comment: data.comment, profileImgUrl: data.profileImgUrl, position: data.position };

        fetch('https://murmuring-falls-57067.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log(data)
                    setReviewSUccess(true)
                    reset();
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" ps-3 my-3 text-start">
                <div className="fw-bold text-primary">Put a Review</div>

                {
                    reviewSuccess && <Alert variant="success">Review Added Successfully</Alert>
                }

                <p className="mt-3">Name <span className="text-danger fw-bold">*</span></p>
                <input {...register("name", { required: true })} defaultValue={user?.displayName} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                {errors.email && <Alert variant="danger">This field is required </Alert>}
                <br />
                <p className="mt-3">Comments <span className="text-danger fw-bold">*</span></p>
                <input {...register("comment", { required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                {errors.comment && <Alert variant="danger">This field is required </Alert>}
                <br />
                <p className="mt-3">Rating 0-5 <span className="text-danger fw-bold">*</span></p>
                <input {...register("rating", { min: 0, max: 5, required: true })} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                <br />
                {errors.rating ? (
                    <>
                        {errors.rating.type === "required" && (
                            <Alert k variant="danger"> THis Field is required </Alert>
                        )}
                        {errors.rating && (
                            <Alert k variant="danger"> Put Value from 0-5 </Alert>

                        )}
                    </>
                ) : null}
                <br />

                <p className="mt-3">Position <span className="text-danger fw-bold">*</span></p>
                <input {...register("position")} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                <br />

                <p className="mt-3">Profile Image Url <span className="text-danger fw-bold">*</span></p>
                <input {...register("profileImgUrl")} type="text" className="py-3 px-5 w-50 bg-light border-primary " />
                <br />
                <input type="submit" className=" btn btn-primary rounded-pill px-5 mt-3" />
            </form>

        </div>
    );
};

export default AddReview;