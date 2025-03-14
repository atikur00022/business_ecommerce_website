import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import store from "../../redux/store/Store.js";
import {getUserDetails} from "../../utility/SessionHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import {ProductCreateRequest} from "../../ApiRequest/Proudct/ProductCreateApiRequest.js";
import {FillProductFormApiRequest} from "../../ApiRequest/Proudct/FillProductFormApiRequest.js";
import {onChangeProductInput, ResetFormValue} from "../../redux/stateSlice/productSlice.js";
import {BrandDropDownRequest} from "../../ApiRequest/Proudct/BrandDropDownApiRequest.js";
import {CategoryDropDownRequest} from "../../ApiRequest/Proudct/CategoryDropDownApiRequest.js";

const ProductCreateUpdate = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [objectId, setObjectId] = useState(null);
    let formValue = useSelector((state)=> state.product.formValue);

    useEffect(()=>{

        (async () => {
            await BrandDropDownRequest();
        })();

        (async () => {
            await CategoryDropDownRequest();
        })();

        let params = new URLSearchParams(window.location.search);
        let id = params.get("id");
        if(id !== null){
            setObjectId(id);
        }

        (async ()=>{
            await FillProductFormApiRequest(id);
        })();

    },[]);

    let brandDropDown = useSelector((state)=> state.product.brandDropDown);
    let categoryDropDown = useSelector((state)=> state.product.categoryDropDown);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (ValidationHelper.IsEmpty(formValue.name)) {
            ValidationHelper.WarningToast("Product name is required!");
        }else if (ValidationHelper.IsEmpty(formValue.brandId)) {
            ValidationHelper.WarningToast("Brand is required!");
        }else if (ValidationHelper.IsEmpty(formValue.unit)) {
            ValidationHelper.WarningToast("Product unit is required!");
        }else if (ValidationHelper.IsEmpty(formValue.categoryId)) {
            ValidationHelper.WarningToast("Category is required!");
        }else if (ValidationHelper.IsEmpty(formValue.details)) {
            ValidationHelper.WarningToast("Product details is required!");
        } else {
            try {
                setLoading(true);

                const res = await ProductCreateRequest(formValue,objectId );

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);
                    store.dispatch(ResetFormValue());
                    const user = await getUserDetails();

                    setTimeout(() => {
                        if (user["role"] === "superadmin") {
                            navigate("/superadminproductlist");
                            setLoading(false);
                        } else if (user["role"] === "admin") {
                            navigate("/adminproductlist");
                            setLoading(false);
                        } else if (user["role"] === "employee") {
                            navigate("/employeeproductlist");
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
                                    <h5 className="card-title fs-2 fw-medium text-success">Save Product</h5>
                                    {/*<hr className="bg-light" />*/}
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="categoryName" className="form-label">Product
                                                        Name</label>
                                                    <input
                                                        value={formValue.name}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeProductInput({
                                                                Name: "name",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="text"
                                                        id="categoryName"
                                                        className="form-control mb-3 custom-input"
                                                        placeholder="Name..."
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="expenseName" className="form-label">Product Brand
                                                        </label>
                                                    <select value={formValue.brandId} onChange={(e) => {
                                                        store.dispatch(onChangeProductInput({
                                                            Name: "brandId",
                                                            Value: e.target.value
                                                        }))
                                                    }} className="form-select" aria-label="Default select example">
                                                        <option>Select Brand</option>
                                                        {
                                                            brandDropDown.map((item, index)=> {
                                                                return (
                                                                    <option key={index.toString()} value={item["_id"]}>{item["name"]}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="categoryName" className="form-label">Product Unit</label>
                                                    <input
                                                        value={formValue.unit}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeProductInput({
                                                                Name: "unit",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="text"
                                                        id="categoryName"
                                                        className="form-control mb-3 custom-input"
                                                        placeholder="unit..."
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="expenseName" className="form-label">Product
                                                        Category</label>
                                                    <select value={formValue.categoryId} onChange={(e) => {
                                                        store.dispatch(onChangeProductInput({
                                                            Name: "categoryId",
                                                            Value: e.target.value
                                                        }))
                                                    }} className="form-select" aria-label="Default select example">
                                                        <option>Select Category</option>
                                                        {
                                                            categoryDropDown.map((item, index)=> {
                                                                return (
                                                                    <option key={index.toString()} value={item["_id"]}>{item["name"]}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Details</label>
                                                    <textarea value={formValue.details} onChange={(e) => {
                                                        store.dispatch(onChangeProductInput({
                                                            Name: "details",
                                                            Value: e.target.value
                                                        }))
                                                    }} className="form-control" id="exampleFormControlTextarea1"
                                                              rows="3"></textarea>

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

export default ProductCreateUpdate;