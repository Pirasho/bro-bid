"use client";
import React, { useEffect, useState } from "react";
import retrievePayments from "./api";
import Header from "../components/Header";

export default function PaymentDetails({ children }) {
    const [paymentDetails, setPaymentDetails] = useState([]);

    useEffect(() => {
        retrievePayments().then((data) => {
            console.log(data);
            setPaymentDetails(data.data);
        })
        .catch((error) => { 
            console.error(error);
        });
    }, []);

    return (
        <>
    <Header />
    <div>{children}</div>
        <div className="container mx-auto mt-5 p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="font-bold text-2xl mb-4">Payment Details</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white text-center">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">ORDER NO</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">DATE</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">ITEM</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">TYPE</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">STATUS</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200">AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentDetails.map((payment, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b border-gray-200">{payment.payment_id}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{payment.date}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{payment.description}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{payment.payment_method.method}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{payment.status}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">Rs. {payment.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
