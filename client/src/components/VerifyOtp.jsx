import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import ValidationHelper from "../utility/ValidationHelper.js";
import {OtpVerifyRequest} from "../ApiRequest/Users/UsersApiRequest.js";
import FullScreenLoader from "../layouts/loader/LazyLoader.jsx";

const VerifyOtp = () => {

    const navigate = useNavigate();

    const initialFormValue = { email: "", otp: "" };
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

        }else if(ValidationHelper.IsEmpty(formValue.otp)){
            ValidationHelper.WarningToast("Otp is required!");

        }else{

            try {

                setLoading(true);

                const res = await OtpVerifyRequest(formValue.email, formValue.otp);

                setFormValue(initialFormValue);

                if (res.status === 'fail') {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === 'success') {
                    ValidationHelper.SuccessToast(res.message);

                    setTimeout(() => {
                        navigate('/passwordreset');
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
                            <div className="card p-4">
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-2">Enter Your OTP Code.</h5>
                                    <p className="card-text text-center">Reset Password Process.</p>
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <label htmlFor="email" className="form-label">Enter Email</label>
                                            <input value={formValue.email}
                                                   onChange={(e) => InputChange("email", e.target.value)} type="text"
                                                   id="email" className="form-control mb-3" placeholder="Email..."/>

                                            <label htmlFor="otp" className="form-label">Enter OTP</label>
                                            <input value={formValue.otp}
                                                   onChange={(e) => InputChange("otp", e.target.value)} type="text"
                                                   id="otp" className="form-control mb-3" placeholder="Otp Code..."/>

                                            <button className="btn btn-success mt-3 mb-1">Next</button>
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

export default VerifyOtp;