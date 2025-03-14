import React, { useEffect, useState } from "react";
import FullScreenLoader from "../../../../layouts/loader/FullScreenLoader.jsx";
import { ExpenseSummaryRequest } from "../../../../ApiRequest/Summary/ExpenseSummaryApiRequest.js";
import { useSelector } from "react-redux";
import { SaleSummaryRequest } from "../../../../ApiRequest/Summary/SaleSummaryApiRequest.js";
import { PurchaseSummaryRequest } from "../../../../ApiRequest/Summary/PurchaseSummaryApiRequest.js";
import { ReturnSummaryRequest } from "../../../../ApiRequest/Summary/ReturnSummaryApiRequest.js";
import ExpenseBarChart from "../../../charts/ExpenseBarChart.jsx";
import SaleBarChart from "../../../charts/SaleBarChart.jsx";
import PurchaseBarChart from "../../../charts/PurchaseBarChart.jsx";
import ReturnBarChart from "../../../charts/ReturnBarChart.jsx"; // Import Bar Chart

const SuperAdminDashboard = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            await ExpenseSummaryRequest();
            await SaleSummaryRequest();
            await PurchaseSummaryRequest();
            await ReturnSummaryRequest();
        })();
        setLoading(false);
    }, []);

    const expenseTotal = useSelector((state) => state.dashboard.ExpenseTotal);
    const saleTotal = useSelector((state) => state.dashboard.SaleTotal);
    const purchaseTotal = useSelector((state) => state.dashboard.PurchaseTotal);
    const returnTotal = useSelector((state) => state.dashboard.ReturnTotal);

    const expenseLast30Days = useSelector((state) => state.dashboard.ExpenseLast30Days);
    const saleLast30Days = useSelector((state)=> state.dashboard.SaleLast30Days);
    const purchaseLast30Days = useSelector((state)=> state.dashboard.PurchaseLast30Days);
    const returnLast30Days = useSelector((state)=> state.dashboard.ReturnLast30Days);

    const expenseChartData = (expenseLast30Days || []).map((item) => ({
        date: item._id,
        amount: item.TotalAmount,
    }));

    const saleChartData = (saleLast30Days || []).map((item) => ({
        date: item._id,
        amount: item.TotalAmount,
    }));

    const purchaseChartData = (purchaseLast30Days || []).map((item) => ({
        date: item._id,
        amount: item.TotalAmount,
    }));

    const returnChartData = (returnLast30Days || []).map((item) => ({
        date: item._id,
        amount: item.TotalAmount,
    }));


    const cards = [
        { title: "Total Expense", value: expenseTotal, color: "#FF6B6B", icon: "💸" },
        { title: "Total Sale", value: saleTotal, color: "#4CAF50", icon: "📈" },
        { title: "Total Purchase", value: purchaseTotal, color: "#3B82F6", icon: "🛒" },
        { title: "Total Return", value: returnTotal, color: "#F59E0B", icon: "🔄" },
    ];

    return (
        <>
            {loading ? (
                <FullScreenLoader />
            ) : (
                <div className="container-fluid my-5">
                    <div className="row g-4">
                        {cards.map((card, index) => (
                            <div className="col-12 col-md-6 col-lg-3" key={index}>
                                <div
                                    className="card shadow rounded text-center p-4 border-0"
                                    style={{backgroundColor: `${card.color}20`}}
                                >
                                    <div
                                        className="icon-box mb-3"
                                        style={{
                                            fontSize: "2rem",
                                            background: `${card.color}`,
                                            color: "#fff",
                                            borderRadius: "50%",
                                            width: "60px",
                                            height: "60px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto",
                                        }}
                                    >
                                        {card.icon}
                                    </div>
                                    <h4 className="mb-2" style={{color: card.color}}>
                                        &#2547; {card.value}
                                    </h4>
                                    <h5 className="text-muted">{card.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expense Bar Chart */}
                    <div className="row mt-5">
                        <div className="col-12 col-lg-6">
                            <ExpenseBarChart data={expenseChartData}/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <SaleBarChart data={saleChartData}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-6">
                            <PurchaseBarChart data={purchaseChartData}/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <ReturnBarChart data={returnChartData}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SuperAdminDashboard;
