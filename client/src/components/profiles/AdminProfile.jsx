import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import validationHelper from "../../utility/ValidationHelper.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import {UpdateProfileDetailsRequest} from "../../ApiRequest/Users/UsersApiRequest.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";

const AdminProfile = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const userImageRef = useRef(null);
    const profileRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);
    const passwordRef = useRef(null);

    const userDetails = useSelector((state) => state.profile.details);
    // console.log("user details", userDetails)

    const ProfileImagePreview = () => {
        const ImageFile = profileRef.current.files[0];
        validationHelper.getBase64(ImageFile).then((result) => {
            userImageRef.current.src = result;
        });
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const mobile = mobileRef.current.value;
        const password = passwordRef.current.value;
        const photo = userImageRef.current.src;

        // Prepare postBody without password if it's unchanged
        let postBody = {
            firstName,
            lastName,
            email,
            mobile:mobile.toString(),
            photo,
        };

        if (password.trim() !== "") {
            postBody.password = password;
        }

        console.log("postBody", postBody);

        if (ValidationHelper.IsEmpty(firstName)) {
            ValidationHelper.WarningToast("First name is required!");
        } else if (ValidationHelper.IsEmpty(lastName)) {
            ValidationHelper.WarningToast("Last name is required!");
        } else if (!ValidationHelper.IsEmail(email)) {
            ValidationHelper.WarningToast("Valid email is required!");
        } else if (ValidationHelper.IsEmpty(mobile)) {
            ValidationHelper.WarningToast("Contact number is required!");
        } else if (!ValidationHelper.IsNumber(mobile)) {
            ValidationHelper.WarningToast("Contact number must be a valid number!");
        } else {
            try {
                setLoading(true);

                const res = await UpdateProfileDetailsRequest(postBody);

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);

                    setTimeout(() => {
                        navigate("/admindashboard");
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
    };

    return (
        <>
            {
                loading ? (
                    <FullScreenLoader/>
                ) : (
                    <section className="profile py-5">
                        <div className="container-fluid">
                            <div className="card p-4 shadow">
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-2">Profile Details</h5>

                                    <div className="text mb-5">
                                        <img ref={userImageRef} src={userDetails['photo']} alt="image"/>
                                        <hr/>
                                    </div>
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <label htmlFor="profileImage" className="form-label">Profile Image</label>
                                            <input ref={profileRef}
                                                   onChange={ProfileImagePreview}
                                                   type="file" id="profileImage" className="form-control mb-3"
                                                   placeholder="Password"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                                    <input key={Date.now()} defaultValue={userDetails['firstName']} ref={firstNameRef}
                                                           type="text"
                                                           id="firstName" className="form-control mb-3"
                                                           placeholder="First Name"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                                    <input key={Date.now()} defaultValue={userDetails['lastName']} ref={lastNameRef}
                                                           type="text"
                                                           id="lastName" className="form-control mb-3"
                                                           placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="email" className="form-label">Email
                                                        Address</label>
                                                    <input key={Date.now()} disabled={true} defaultValue={userDetails['email']}
                                                           ref={emailRef}
                                                           type="text"
                                                           id="email" className="form-control mb-3"
                                                           placeholder="Email Address..."/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="firstName" className="form-label">Mobile
                                                        Number</label>
                                                    <input key={Date.now()} defaultValue={userDetails['mobile']}
                                                           ref={mobileRef}
                                                           type="text"
                                                           id="firstName" className="form-control mb-3"
                                                           placeholder="Mobile Number..."/>
                                                </div>
                                            </div>

                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input key={Date.now()} defaultValue={userDetails['password']}
                                                   ref={passwordRef}
                                                   type="password" id="password" className="form-control mb-3"
                                                   placeholder="New Password..."/>

                                            <button className="btn btn-success mt-3 mb-1">Update Profile</button>
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

export default AdminProfile;