import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ValidationHelper from "../utility/ValidationHelper.js";
import {EmailVerifyRequest} from "../ApiRequest/Users/UsersApiRequest.js";
import FullScreenLoader from "../layouts/loader/LazyLoader.jsx";

const VerifyEmail = () => {

    const navigate = useNavigate();

    const initialFormValue = { email: "", password: "" };
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

        if(!ValidationHelper.IsEmail(formValue.email)){
            ValidationHelper.WarningToast("Valid email is required!");

        }else{

            try {

                setLoading(true);

                const res = await EmailVerifyRequest(formValue.email);

                console.log('login response', res)

                setFormValue(initialFormValue);

                if (res.status === 'fail') {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === 'success') {
                    ValidationHelper.SuccessToast(res.message);

                    setTimeout(() => {
                        navigate('/verifyotp');
                        setLoading(false);
                    }, 1000);
                } else {
                    setLoading(false);
                    ValidationHelper.ErrorToast("Unexpected response from server!");
                }
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
                    <section className="login py-5">
                        <div className="container">
                            <div className="card p-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-2">Enter Your Email Address.</h5>
                                    <p className="card-text text-center">Reset Password Process.</p>
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <label htmlFor="email" className="form-label">Enter Email</label>
                                            <input value={formValue.email}
                                                   onChange={(e) => InputChange("email", e.target.value)} type="text"
                                                   id="email" className="form-control mb-3" placeholder="Email..."/>

                                            <button className="btn btn-success mt-2 mb-1">Next</button>
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

export default VerifyEmail;