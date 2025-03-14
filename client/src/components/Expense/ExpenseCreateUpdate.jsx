import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import store from "../../redux/store/Store.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import {ExpenseTypeDropDownRequest} from "../../ApiRequest/Expense/ExpenseTypeDropDownApiRequest.js";
import {onChangeExpenseInput, ResetFormValue} from "../../redux/stateSlice/expenseSlice.js";
import {ExpenseCreateRequest} from "../../ApiRequest/Expense/ExpenseCreateApiRequest.js";
import {getUserDetails} from "../../utility/SessionHelper.js";
import {FillExpenseFormApiRequest} from "../../ApiRequest/Expense/FillExpenseFormApiRequest.js";

const ExpenseCreateUpdate = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [objectId, setObjectId] = useState(null);
    let formValue = useSelector((state)=> state.expense.formValue);

    useEffect(()=>{

        (async ()=>{
            await ExpenseTypeDropDownRequest();
        })()

        let params = new URLSearchParams(window.location.search);
        let id = params.get("id");
        if(id !== null){
            setObjectId(id);
            (async ()=>{
                await FillExpenseFormApiRequest(id);
            })()
        }

    },[]);

    let expenseTypeDropDown = useSelector((state)=> state.expense.expenseTypeDropDown);


    const formSubmit = async (e) => {
        e.preventDefault();

        if (ValidationHelper.IsEmpty(formValue.typeID)) {
            ValidationHelper.WarningToast("Expense type is required!");
        }else if (formValue.amount === 0) {
            ValidationHelper.WarningToast("Expense amount is required!");
        }else if (!ValidationHelper.IsNumber(formValue.amount)) {
            ValidationHelper.WarningToast("Expense amount must be number!");
        } else {
            try {
                setLoading(true);
                console.log("check data", formValue)
                const res = await ExpenseCreateRequest(formValue,objectId );

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);
                    store.dispatch(ResetFormValue());
                    const user = await getUserDetails();

                    setTimeout(() => {
                        if (user["role"] === "superadmin") {
                            navigate("/superadminexpenselist");
                            setLoading(false);
                        } else if (user["role"] === "admin") {
                            navigate("/adminexpenselist");
                            setLoading(false);
                        } else if (user["role"] === "employee") {
                            navigate("/employeeexpenselist");
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
                                    <h5 className="card-title fs-2 fw-medium text-success">Save Expense</h5>
                                    {/*<hr className="bg-light" />*/}
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="expenseName" className="form-label">Expense
                                                        Type</label>
                                                    <select  value={formValue.typeID} onChange={(e) => {
                                                        store.dispatch(onChangeExpenseInput({
                                                            Name: "typeID",
                                                            Value: e.target.value
                                                        }))
                                                    }} className="form-select" aria-label="Default select example">
                                                        <option>Select Type</option>
                                                        {
                                                            expenseTypeDropDown.map((item, index)=> {
                                                                return (
                                                                    <option key={index.toString()} value={item["_id"]}>{item["name"]}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="expenseAmount" className="form-label">Expense
                                                        Amount</label>
                                                    <input
                                                        value={formValue.amount}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeExpenseInput({
                                                                Name: "amount",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="number"
                                                        id="expenseAmount"
                                                        className="form-control mb-3 custom-input"
                                                        placeholder="Amount..."
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="expenseNote" className="form-label">Expense
                                                        Note</label>
                                                    <input
                                                        value={formValue.note}
                                                        onChange={(e) => {
                                                            store.dispatch(onChangeExpenseInput({
                                                                Name: "note",
                                                                Value: e.target.value
                                                            }))
                                                        }}
                                                        type="text"
                                                        id="expenseNote"
                                                        className="form-control mb-3 custom-input"
                                                        placeholder="Note..."
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

export default ExpenseCreateUpdate;