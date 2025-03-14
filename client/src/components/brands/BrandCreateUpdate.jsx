import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import store from "../../redux/store/Store.js";
import {getUserDetails} from "../../utility/SessionHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import {onChangeBrandInput, ResetFormValue} from "../../redux/stateSlice/brandSlice.js";
import {FillBrandFormApiRequest} from "../../ApiRequest/Brands/FillBrandFormApiRequest.js";
import {BrandCreateRequest} from "../../ApiRequest/Brands/BrandCreateApiRequest.js";


const BrandCreateUpdate = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [objectId, setObjectId] = useState(null);
    let formValue = useSelector((state)=> state.brand.formValue);

    useEffect(()=>{

        let params = new URLSearchParams(window.location.search);
        let id = params.get("id");
        if(id !== null){
            setObjectId(id);
        }

        (async ()=>{
            await FillBrandFormApiRequest(id);
        })()

    },[]);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (ValidationHelper.IsEmpty(formValue.name)) {
            ValidationHelper.WarningToast("Brand name is required!");
        } else {
            try {
                setLoading(true);

                const res = await BrandCreateRequest(formValue,objectId );

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);
                    store.dispatch(ResetFormValue());
                    const user = await getUserDetails();

                    setTimeout(() => {
                        if (user["role"] === "superadmin") {
                            navigate("/superadminbrandlist");
                            setLoading(false);
                        } else if (user["role"] === "admin") {
                            navigate("/adminbrandlist");
                            setLoading(false);
                        } else if (user["role"] === "employee") {
                            navigate("/employeebrandlist");
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
                                    <h5 className="card-title fs-2 fw-medium text-success">Save Brand</h5>
                                    {/*<hr className="bg-light" />*/}
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="brandName" className="form-label">Brand
                                                        Name</label>
                                                    <input
                                                        value={formValue.name}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeBrandInput({
                                                                Name: "name",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="text"
                                                        id="brandName"
                                                        className="form-control mb-3 custom-input"
                                                        placeholder="Name..."
                                                    />
                                                </div>


                                            </div>

                                            <button className="btn btn-success mt-2 mb-1">Save Changes</button>
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

export default BrandCreateUpdate;