import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const location = useLocation();
    const history = useHistory();

    const { registerUser, error } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.email, data.password);
        registerUser(data.email, data.password, data.name, location, history);
    }

    return (
        <>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Navigation></Navigation>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="text-start p-5  border border-primary" >

                    <div className="fw-bold text-primary">REGISTRATION</div>

                    <p className="mt-3">Your Name <span className="text-danger fw-bold">*</span></p>
                    <input {...register("name", { required: true })} type="text" className="py-3 px-5 w-100 bg-light border-primary" />
                    {errors.name && <Alert variant="danger">This field is required </Alert>}
                    <br />

                    <p className="mt-5">Email Address <span className="text-danger fw-bold">*</span></p>
                    <input {...register("email", { required: true })} type="email" className="py-3 px-5 w-100 bg-light border-primary " />
                    <br />
                    {errors.email && <Alert variant="danger">This field is required </Alert>}
                    <br />


                    <p className="mt-3">Password <span className="text-danger fw-bold">*</span></p>
                    <input {...register("password", { required: true })} type="password" className="py-3 px-5 w-100 bg-light border-primary " />
                    <br />
                    {errors.password && <Alert variant="danger">This field is required </Alert>}
                    <br />
                    <p>Already a User? <Link to="login" className="text-decoration-none"> <span className="text-primary fw-bold "> Login Here</span></Link></p>
                    <input type="submit" className="btn btn-primary w-100" />
                    {error && <Alert variant="danger" className="fw-bold mt-3">{error} </Alert>}
                </form>
            </div>


        </>
    );
};

export default Register;