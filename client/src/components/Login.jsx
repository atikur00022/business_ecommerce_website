import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ValidationHelper from "../utility/ValidationHelper.js";
import {LoginRequest} from "../ApiRequest/Users/UsersApiRequest.js";
import {getUserDetails, setUserUrl} from "../utility/SessionHelper.js";
import FullScreenLoader from "../layouts/loader/FullScreenLoader.jsx";

const Login = () => {

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

        }else if (ValidationHelper.IsEmpty(formValue.password)) {
            ValidationHelper.WarningToast("Password is required!");

        }else{

            try {

                setLoading(true);

                const res = await LoginRequest(formValue);

                console.log('login response', res)

                setFormValue(initialFormValue);

                if (res.status === 'fail') {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === 'success') {
                    ValidationHelper.SuccessToast(res.message);
                        const user = await getUserDetails();
                    console.log("user", user['role']);

                    setTimeout(() => {
                        if (user["role"] === "superadmin") {
                            setUserUrl("superadmindashboard");
                            window.location.href = "/superadmindashboard";
                        } else if (user["role"] === "admin") {
                            setUserUrl("admindashboard");
                            window.location.href = "/admindashboard";
                        } else if (user["role"] === "user") {
                            setUserUrl("userdashboard");
                            window.location.href = "/userdashboard";
                        } else {
                            ValidationHelper.ErrorToast(
                                "You are not authorized to login! Use correct credentials."
                            );
                        }
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
                                    <h5 className="card-title text-center fs-2">Login Account</h5>
                                    <p className="card-text text-center">Please login below account details</p>
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input value={formValue.email}
                                                   onChange={(e) => InputChange("email", e.target.value)} type="text"
                                                   id="email" className="form-control mb-3" placeholder="Email"/>

                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input value={formValue.password}
                                                   onChange={(e) => InputChange("password", e.target.value)} type="password"
                                                   id="password" className="form-control mb-3" placeholder="Password"/>

                                            <button className="btn btn-success mt-3 mb-1">Login</button>
                                            <br/>
                                            <Link to="/registration">
                                            <span
                                                className="register-link d-inline-block text-decoration-none text-black">Don't have account? Registration.</span>
                                            </Link> <br/>
                                            <Link to="/verifyemail">
                                            <span
                                                className="register-link d-inline-block text-decoration-none text-black">Forget Password?</span>
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

export default Login;