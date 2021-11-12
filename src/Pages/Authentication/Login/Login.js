import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.email, data.password);
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
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

export default Login;