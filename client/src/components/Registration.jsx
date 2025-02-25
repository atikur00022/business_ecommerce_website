import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ValidationHelper from "../utility/ValidationHelper.js";
import {RegistrationRequest} from "../ApiRequest/Users/UsersApiRequest.js";
import FullScreenLoader from "../layouts/loader/FullScreenLoader.jsx";

const Registration = () => {

    const navigate = useNavigate();

    const initialFormValue = { firstName: "", lastName: "", email: "", mobile: "", password: "" };
    const [formValue, setFormValue] = useState(initialFormValue);
    const [loading, setLoading] = useState(false);

    const InputChange = (InputName, InputValue) => {
        setFormValue((FormValues) => ({
            ...FormValues,
            [InputName]: InputValue,
        }));
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        if(ValidationHelper.IsEmpty(formValue.firstName)){
            ValidationHelper.WarningToast("First name is required!");

        }else if(ValidationHelper.IsEmpty(formValue.lastName)){
            ValidationHelper.WarningToast("Last name is required!");

        }else if(!ValidationHelper.IsEmail(formValue.email)){
            ValidationHelper.WarningToast("Valid email is required!");

        }else if(ValidationHelper.IsEmpty(formValue.mobile)){
            ValidationHelper.WarningToast("Contact number is required!");

        }else if (!ValidationHelper.IsNumber(formValue.mobile)) {
            ValidationHelper.WarningToast("Contact number must be a valid number!");

        }else if (ValidationHelper.IsEmpty(formValue.password)) {
            ValidationHelper.WarningToast("Password is required!");

        }else{

            try {
                setLoading(true);

                const res = await RegistrationRequest(formValue);

                setFormValue(initialFormValue);

                setTimeout(() => { // Add delay before hiding the loader
                    if (res.status === 'fail') {
                        setLoading(false);
                        ValidationHelper.ErrorToast(res.message);
                    } else if (res.status === 'success') {
                        ValidationHelper.SuccessToast(res.message);
                        navigate('/login');
                    } else {
                        setLoading(false);
                        ValidationHelper.ErrorToast("Unexpected response from server!");
                    }
                }, 1000);
            } catch (e) {
                setLoading(false);
                ValidationHelper.ErrorToast("Something went wrong!");
            }
        }
    }

    return (
        <>
            {
                loading ? (
                    <FullScreenLoader/>
                ) : (
                    <section className="registration py-5">
                        <div className="container">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-2">Create Account</h5>
                                    <p className="card-text text-center">Please register below account details</p>
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                                    <input value={formValue.firstName}
                                                           onChange={(e) => InputChange("firstName", e.target.value)}
                                                           type="text"
                                                           id="firstName" className="form-control mb-3"
                                                           placeholder="First Name"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                                    <input value={formValue.lastName}
                                                           onChange={(e) => InputChange("lastName", e.target.value)}
                                                           type="text"
                                                           id="lastName" className="form-control mb-3"
                                                           placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="firstName" className="form-label">Email
                                                        Address</label>
                                                    <input value={formValue.email}
                                                           onChange={(e) => InputChange("email", e.target.value)}
                                                           type="text"
                                                           id="firstName" className="form-control mb-3"
                                                           placeholder="Email Address..."/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="firstName" className="form-label">Mobile
                                                        Number</label>
                                                    <input value={formValue.mobile}
                                                           onChange={(e) => InputChange("mobile", e.target.value)}
                                                           type="text"
                                                           id="firstName" className="form-control mb-3"
                                                           placeholder="Enter Mobile Number..."/>
                                                </div>
                                            </div>

                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input value={formValue.password}
                                                   onChange={(e) => InputChange("password", e.target.value)}
                                                   type="password" id="password" className="form-control mb-3"
                                                   placeholder="Password"/>

                                            <button className="btn btn-success mt-3 mb-1">Register</button>
                                            <br/>
                                            <Link to="/login">
                                                <span
                                                    className="login-link d-inline-block text-decoration-none text-black">Already have account? Login.</span>
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>

    );
};

export default Registration;