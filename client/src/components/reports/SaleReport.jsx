import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import ValidationHelper from "../../utility/ValidationHelper.js";
import FullScreenLoader from "../../layouts/loader/FullScreenLoader.jsx";
import moment from "moment";
import exportFromJSON from "export-from-json";
import {SaleReportApiRequest} from "../../ApiRequest/Report/SaleReportApiRequest.js";

const SaleReport = () => {

    const [loading, setLoading] = useState(false);
    let formRef = useRef(null);
    let toRef = useRef(null);

    let dataList = useSelector((state) => state.report.saleReportByDateList);

    const formSubmit = async (e) => {

        e.preventDefault();

        let formRefValue = formRef.current.value;
        let toRefValue = toRef.current.value;

        if (ValidationHelper.IsEmpty(formRefValue)) {
            ValidationHelper.WarningToast("Form date is required!");
        }else if (ValidationHelper.IsEmpty(toRefValue)) {
            ValidationHelper.WarningToast("To date is required!");
        }else{

            try {
                setLoading(true);

                const res = await SaleReportApiRequest(formRefValue, toRefValue);

                if (res.status === "fail") {
                    setLoading(false);
                    ValidationHelper.ErrorToast(res.message);
                } else if (res.status === "success") {
                    ValidationHelper.SuccessToast(res.message);
                    setLoading(false);
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

    const onExport = (exportType, data) => {

        const fileName = 'SaleReport';
        if(data.length > 0){
            let reportData = [];
            data.map((item, index) => {
                let listItem = {
                    "amount": item["amount"],
                    "note": item["note"],
                    "category": item["type"][0]['name'],
                    "date": moment(item["createdAt"]).format("MMMM Do YYYY"),
                }
                reportData.push(listItem);
            })
            exportFromJSON({ data: reportData, fileName: fileName, exportType: exportType });
        }

    }

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
                                    <h5 className="card-title fs-2 fw-medium text-success">Sales Report By Date</h5>
                                    {/*<hr className="bg-light" />*/}
                                    <div className="form mt-5">
                                        <form onSubmit={formSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor="formDate" className="form-label">Date
                                                        Form:</label>
                                                    <input
                                                        ref={formRef}
                                                        type="date"
                                                        id="formDate"
                                                        className="form-control mb-3 custom-input"
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="toDate" className="form-label">Date
                                                        To:</label>
                                                    <input
                                                        ref={toRef}
                                                        type="date"
                                                        id="toDate"
                                                        className="form-control mb-3 custom-input"
                                                    />
                                                </div>

                                            </div>

                                            <button className="btn btn-success mt-2 mb-1">Save Changes</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                            {
                                dataList.length > 0 ? (
                                    <div className="col-12">
                                        <div className="card shadow p-4 mt-5">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h6 className="mb-3">Total: {dataList[0]['Total'].length > 0 ? dataList[0]['Total'][0]['TotalAmount'] + " " + "Tk" : 0 } </h6>
                                                        <button onClick={onExport.bind(this, 'csv', dataList[0]['Rows'])} className="btn btn-outline-success me-2">Download CSV</button>
                                                        <button onClick={onExport.bind(this, 'xls', dataList[0]['Rows'])} className="btn btn-outline-success">Download XLS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ): (
                                    <div></div>
                                )
                            }
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default SaleReport;