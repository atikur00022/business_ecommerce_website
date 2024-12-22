import React from 'react';
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <section className="registration py-5">
             <div className="container">
                 <div className="card p-4">
                     <div className="card-body">
                         <h5 className="card-title text-center fs-2">Create Account</h5>
                         <p className="card-text text-center">Please register below account details</p>
                         <div className="form mt-5">
                             <form>
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label htmlFor="firstName" className="form-label">First Name</label>
                                         <input type="text" id="firstName" className="form-control mb-3"
                                                placeholder="First Name"/>
                                     </div>
                                     <div className="col-md-6">
                                         <label htmlFor="lastName" className="form-label">Last Name</label>
                                         <input type="text" id="lastName" className="form-control mb-3"
                                                placeholder="Last Name"/>
                                     </div>
                                 </div>
                                 <label htmlFor="email" className="form-label">Email</label>
                                 <input type="email" id="email" className="form-control mb-3" placeholder="Email"/>

                                 <label htmlFor="password" className="form-label">Password</label>
                                 <input type="text" id="password" className="form-control mb-3" placeholder="Password"/>

                                 <button className="btn btn-success mt-3 mb-1">Register</button> <br/>
                                 <Link to="/login">
                                     <span className="login-link d-inline-block text-decoration-none text-black">Already have account? Login.</span>
                                 </Link>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};

export default Registration;