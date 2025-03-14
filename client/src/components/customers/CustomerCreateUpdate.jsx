import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import {onChangeCustomerInput, ResetFormValue} from "../../redux/stateSlice/customerSlice.js";
import store from "../../redux/store/Store.js";
import {CustomerCreateRequest} from "../../ApiRequest/Customers/CustomerCreateApiRequest.js";
import {getUserDetails} from "../../utility/SessionHelper.js";
import {FillCustomerFormApiRequest} from "../../ApiRequest/Customers/FillCustomerFormApiRequest.js";

const CustomerCreateUpdate = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [objectId, setObjectId] = useState(null);
    let formValue = useSelector((state)=> state.customer.formValue);

    useEffect(()=>{

        let params = new URLSearchParams(window.location.search);
        let id = params.get("id");
        if(id !== null){
            setObjectId(id);
        }

        (async ()=>{
            await FillCustomerFormApiRequest(id);
        })()

    },[]);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (ValidationHelper.IsEmpty(formValue.name)) {
            ValidationHelper.WarningToast("Customer name is required!");
        } else if (!ValidationHelper.IsEmail(formValue.email)) {
            ValidationHelper.WarningToast("Email is required!");
        } else if (ValidationHelper.IsEmpty(formValue.phone)) {
            ValidationHelper.WarningToast("Contact number is required!");
        } else if (!ValidationHelper.IsNumber(formValue.phone)) {
            ValidationHelper.WarningToast("Contact number must be a valid number!");
        } else if (ValidationHelper.IsEmpty(formValue.address)) {
            ValidationHelper.WarningToast("Address is required!");
        } else {
            try {
                setLoading(true);

                const res = await CustomerCreateRequest(formValue,objectId );

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);
                    store.dispatch(ResetFormValue());
                    const user = await getUserDetails();

                    setTimeout(() => {
                        if (user["role"] === "superadmin") {
                            navigate("/superadmincustomerlist");
                            setLoading(false);
                        } else if (user["role"] === "admin") {
                            navigate("/admincustomerlist");
                            setLoading(false);
                        } else if (user["role"] === "employee") {
                            navigate("/employeelist");
                            setLoading(false);
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
    };

    return (
        <>
            {
                loading ? (
                    <FullScreenLoader/>
                ) : (
                    <section className="profile py-5">
                        <div className="container-fluid">
                            <div className="card shadow p-4">
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-2 fw-medium text-success">Save Customers</h5>
                                    <hr className="bg-light" />
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="customerName" className="form-label">Customer
                                                        Name</label>
                                                    <input
                                                        value={formValue.name}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeCustomerInput({
                                                                Name: "name",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="text"
                                                        id="customerName" className="form-control mb-3 custom-input"
                                                        placeholder="Name..."/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="email" className="form-label">Email
                                                    </label>
                                                    <input

                                                        onChange={(e) => {
                                                            store.dispatch(onChangeCustomerInput({
                                                                Name: "email",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        value={formValue.email}
                                                        type="text"
                                                        id="email" className="form-control mb-3 custom-input"
                                                        placeholder="Email..."/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="MobileNo" className="form-label">Mobile
                                                        Number</label>
                                                    <input
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeCustomerInput({
                                                                Name: "phone",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        value={formValue.phone}
                                                        type="text"
                                                        id="MobileNo" className="form-control mb-3 custom-input"
                                                        placeholder="Number..."/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label htmlFor="address" className="form-label">Address
                                                    </label>
                                                    <textarea value={formValue.address}
                                                              onChange={(e) => {
                                                                  store.dispatch(onChangeCustomerInput({
                                                                      Name: "address",
                                                                      Value: e.target.value
                                                                  }))
                                                              }} rows="5 "
                                                              id="address" className="form-control mb-3 custom-input"
                                                              placeholder="Address..."/>
                                                </div>

                                            </div>

                                            <button className="btn btn-success mt-3 mb-1">Save Changes</button>
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

export default CustomerCreateUpdate;