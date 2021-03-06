import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const [adminSuccess, setAdminSUccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const newAdmin = { email: data.email };
        fetch('https://murmuring-falls-57067.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    setAdminSUccess(true);
                    console.log(adminSuccess)
                    reset();
                }
            })
    }

    return (
        <div className="bg-light mt-3 py-3 text-start">
            <form onSubmit={handleSubmit(onSubmit)} className=" ps-3 my-3">
                <div className="fw-bold text-primary">Make Admin</div>

                {
                    adminSuccess && <Alert variant="success">Admin Added Successfully</Alert>
                }

                <p className="mt-3">Enter Admin Emial <span className="text-danger fw-bold">*</span></p>
                <input {...register("email", { required: true })} type="email" className="py-3 px-5 w-50 bg-light border-primary " />
                <br />

                <input type="submit" className=" btn btn-primary rounded-pill px-5 mt-3" />
            </form>
        </div>
    );
};

export default MakeAdmin;