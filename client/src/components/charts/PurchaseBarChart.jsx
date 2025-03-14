import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const PurchaseBarChart = ({ data }) => {
    return (
        <div className="card shadow p-4">
            <h4 className="text-center mb-3">📊 Last 30 Days Purchase</h4>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 50, bottom: 50 }} // Increased left padding
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis
                        dataKey="date"
                        angle={-30}
                        textAnchor="end"
                        interval={0}
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis tickFormatter={(value) => `৳${value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => `৳${value.toLocaleString()}`} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="amount" fill="#3B82F6" barSize={40} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PurchaseBarChart;
