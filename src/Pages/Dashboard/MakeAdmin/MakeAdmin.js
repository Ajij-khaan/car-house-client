import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);

        const newAdmin = { email: data.email };

        fetch('http://localhost:5000/users/admin', {
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
                    alert('Admin added Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email",)} placeholder="Enter Admin Email" className='p-3 border-2 border-danger mb-3 w-100 mt-3' />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;