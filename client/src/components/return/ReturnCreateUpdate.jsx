import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import store from "../../redux/store/Store.js";
import {getUserDetails} from "../../utility/SessionHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import {BsCartCheck} from "react-icons/bs";
import {RiDeleteBin2Line} from "react-icons/ri";
import {CreateReturnRequest} from "../../ApiRequest/Return/CreateReturnApiReuest.js";
import {onChangeReturnInput, setRemoveReturnItemList, setReturnItemList} from "../../redux/stateSlice/returnSlice.js";
import {ReturnCustomerDropDownRequest} from "../../ApiRequest/Return/ReturnCustomerDropDownApiRequest.js";
import {ReturnProductDropDownRequest} from "../../ApiRequest/Return/ReturnProductDropDownApiRequest.js";

const ReturnCreateUpdate = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    let productRef = useRef(null);
    let qtyRef = useRef(null);
    let unitPriceRef = useRef(null);

    useEffect(() => {
        (async () => {
            await ReturnCustomerDropDownRequest();
            await ReturnProductDropDownRequest();
        })()
    },[])

    const customerDropDown = useSelector((state) => state.return.customerDropDown);
    const productDropDown = useSelector((state) => state.return.productDropDown);
    const returnItemList = useSelector((state) => state.return.returnItemList);
    const returnFormValue = useSelector((state) => state.return.returnFormValue);

    const onAddCart = () => {

        let productValue = productRef.current.value;
        let productName = productRef.current.selectedOptions[0]?.text || "";
        let qtyValue = qtyRef.current.value;
        let unitPriceValue = unitPriceRef.current.value;

        if(ValidationHelper.IsEmpty(productValue)) {
            ValidationHelper.WarningToast("Select product is required!")
        }else if(ValidationHelper.IsEmpty(qtyValue)) {
            ValidationHelper.WarningToast("Qty is required!")
        }else if(ValidationHelper.IsEmpty(unitPriceValue)) {
            ValidationHelper.WarningToast("Unit price is required!")
        }else {

            let item = {
                "productId": productValue,
                "productName": productName,
                "qty": qtyValue,
                "unitCost": unitPriceValue,
                "total": (parseInt(qtyValue)*(parseInt(unitPriceValue))),
            }

            store.dispatch(setReturnItemList(item))
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        if(ValidationHelper.IsEmpty(returnFormValue.customerId)) {
            ValidationHelper.WarningToast("Customer is required!")
        }else if(ValidationHelper.IsEmpty(returnFormValue.vatTax)) {
            ValidationHelper.WarningToast("Vat/Tax is required!")
        }else if(ValidationHelper.IsEmpty(returnFormValue.shippingCost)) {
            ValidationHelper.WarningToast("Shipping cost is required!")
        }else if(ValidationHelper.IsEmpty(returnFormValue.grandTotal)) {
            ValidationHelper.WarningToast("Grand total is required!")
        }else {

            if (returnItemList.length > 0){

                try {
                    setLoading(true);
                    let res =  await CreateReturnRequest(returnFormValue, returnItemList);

                    if (res.status === "fail") {
                        setLoading(false);
                        ValidationHelper.ErrorToast(res.message);
                    } else if (res.status === "success") {
                        ValidationHelper.SuccessToast(res.message);

                        const user = await getUserDetails();

                        setTimeout(() => {
                            if (user["role"] === "superadmin") {
                                navigate("/superadminreturnlist");
                                setLoading(false);
                            } else if (user["role"] === "admin") {
                                navigate("/adminreturnlist");
                                setLoading(false);
                            } else if (user["role"] === "employee") {
                                navigate("/employeereturnlist");
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

                }catch (e) {
                    setLoading(false);
                    ValidationHelper.ErrorToast("Something went wrong!");
                }

            }else {
                ValidationHelper.ErrorToast("Return item is required!");
            }

        }
    }

    const removeCart = async (index) => {
        store.dispatch(setRemoveReturnItemList(index));
    }

    return (
        <>
            {
                loading ? (
                    <FullScreenLoader/>
                ): (
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-4">
                                <div className="card shadow rounded pt-3 vh-100">
                                    <div className="card-body">
                                        <div className="container-fluid">
                                            <h4 className="fw-bold text-success mb-4">Create Returns</h4>
                                            <form onSubmit={formSubmit}>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="selectCustomer" className="form-label">Select
                                                        Customer</label>
                                                    <select
                                                        value={returnFormValue.customerId} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "customerId",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                    >
                                                        <option>Customer</option>
                                                        {
                                                            customerDropDown.map((item, index) => {
                                                                return (
                                                                    <option key={index.toString()} value={item["_id"]}>{item["name"]}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="vatTax" className="form-label">Vat/Tax</label>
                                                    <input
                                                        value={returnFormValue.vatTax} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "vatTax",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="number"
                                                        id="vatTax" className="form-control mb-3"
                                                        placeholder="vatTax..."/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="discount" className="form-label">Discount</label>
                                                    <input
                                                        value={returnFormValue.discount} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "discount",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="number"
                                                        id="discount" className="form-control mb-3"
                                                        placeholder="discount..."/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="otherCost" className="form-label">Other cost</label>
                                                    <input
                                                        value={returnFormValue.otherCost} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "otherCost",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="number"
                                                        id="otherCost" className="form-control mb-3"
                                                        placeholder="otherCost..."/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="shippingCost" className="form-label">Shipping
                                                        cost</label>
                                                    <input
                                                        value={returnFormValue.shippingCost} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "shippingCost",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="number"
                                                        id="shippingCost" className="form-control mb-3"
                                                        placeholder="shippingCost..."/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="grandTotal" className="form-label">Grand
                                                        total</label>
                                                    <input
                                                        value={returnFormValue.grandTotal} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "grandTotal",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="number"
                                                        id="grandTotal" className="form-control mb-3"
                                                        placeholder="grandTotal..."/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="note" className="form-label">Note</label>
                                                    <input
                                                        value={returnFormValue.note} onChange={(e) => {
                                                        store.dispatch(onChangeReturnInput({
                                                            Name: "note",
                                                            Value: e.target.value
                                                        }))
                                                    }}
                                                        type="text"
                                                        id="note" className="form-control mb-3"
                                                        placeholder="note..."/>
                                                </div>
                                                <button className="btn btn-success mt-2">Create</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="card shadow rounded pt-3 vh-100">
                                    <div className="card-body">
                                        <div className="container-fluid">

                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="selectProduct" className="form-label">Select
                                                        Product</label>
                                                    <select
                                                        ref={productRef}
                                                        className="form-select form-control"
                                                        aria-label="Default select example"
                                                    >
                                                        <option>Product</option>
                                                        {
                                                            productDropDown.map((item, index) => {
                                                                return (
                                                                    <option key={index.toString()} value={item["_id"]}>{item["name"]}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-2">
                                                    <label htmlFor="qty" className="form-label">Qty</label>
                                                    <input
                                                        ref={qtyRef}
                                                        type="text"
                                                        id="qty" className="form-control mb-3"
                                                        placeholder="Quantity..."/>
                                                </div>
                                                <div className="col-2">
                                                    <label htmlFor="unitPrice" className="form-label">Unit Price</label>
                                                    <input
                                                        ref={unitPriceRef}
                                                        type="text"
                                                        id="unitPrice" className="form-control mb-3"
                                                        placeholder="Unit price..."/>
                                                </div>
                                                <div className="col-2">
                                                    <label htmlFor="unitPrice" className="form-label">Add to
                                                        cart</label>
                                                    <button onClick={onAddCart} className="btn btn-success w-100"><BsCartCheck/></button>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive"
                                                         style={{maxHeight: "600px", overflowY: "auto"}}>
                                                        <table className="table table-bordered table-striped">
                                                            <thead
                                                                className="table-primary sticky-top bg-white text-center">
                                                            <tr>
                                                                <th>#No</th>
                                                                <th>Name</th>
                                                                <th>Qty</th>
                                                                <th>Unit Price</th>
                                                                <th>Total</th>
                                                                <th>Remove</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                returnItemList.map((item, index) => {
                                                                    return (

                                                                        <tr key={index}
                                                                            className="align-middle text-center">
                                                                            <td>
                                                                                <p>{index + 1}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{item['productName']}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{item['qty']}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{item['unitCost']}</p>
                                                                            </td>
                                                                            <td>
                                                                                <p>{item['total']}</p>
                                                                            </td>
                                                                            <td>
                                                                                <button
                                                                                    onClick={() => removeCart(index)}
                                                                                    className="btn btn-outline-danger btn-sm ms-2"
                                                                                >
                                                                                    <RiDeleteBin2Line size={18}/>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pagination */}
                                            {/*<div className="d-flex justify-content-center mt-4">*/}
                                            {/*    <ReactPaginate*/}
                                            {/*        nextLabel=">"*/}
                                            {/*        previousLabel="<"*/}
                                            {/*        pageClassName="page-item"*/}
                                            {/*        pageLinkClassName="page-link"*/}
                                            {/*        previousClassName="page-item"*/}
                                            {/*        previousLinkClassName="page-link"*/}
                                            {/*        nextClassName="page-item"*/}
                                            {/*        nextLinkClassName="page-link"*/}
                                            {/*        breakLabel="..."*/}
                                            {/*        breakClassName="page-item"*/}
                                            {/*        breakLinkClassName="page-link"*/}
                                            {/*        pageCount=""*/}
                                            {/*        marginPagesDisplayed={2}*/}
                                            {/*        pageRangeDisplayed={5}*/}
                                            {/*        onPageChange=""*/}
                                            {/*        containerClassName="pagination"*/}
                                            {/*        activeClassName="active"*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default ReturnCreateUpdate;