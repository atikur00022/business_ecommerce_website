import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login py-5">
            <div className="container">
                <div className="card p-4">
                    <div className="card-body">
                        <h5 className="card-title text-center fs-2">Login Account</h5>
                        <p className="card-text text-center">Please login below account details</p>
                        <div className="form mt-5">
                            <form>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control mb-3" placeholder="Email"/>

                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="text" id="password" className="form-control mb-3" placeholder="Password"/>

                                <button className="btn btn-success mt-3 mb-1">Login</button>
                                <br/>
                                <Link to="/registration">
                                    <span className="register-link d-inline-block text-decoration-none text-black">Don't have account? Registration.</span>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;