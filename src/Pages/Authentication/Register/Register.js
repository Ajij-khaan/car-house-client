import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.email, data.password);
        // setEmail(data.email)
        // setPassword(data.password)
        registerUser(data.email, data.password, data.name, location, history);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} type="text" placeholder="Your Name" />
            <br />
            <input {...register("email", { required: true })} type="email" placeholder="Your Email" />
            <br />
            {errors.email && <span>This field is required</span>}
            <br />
            <input {...register("password", { required: true })} type="password" placeholder="Password" />
            <br />
            {errors.password && <span>This field is required</span>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default Register;