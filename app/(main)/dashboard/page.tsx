"use client";

import moment from "moment";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import QueryProvider from "./query";
import Summary from "./summary";
import Paginate from "./pagination";

const Dashboard = () => {
    return <QueryProvider>
        <DashboardData></DashboardData>
    </QueryProvider>
}

const DashboardData = () => {
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const fetchTransactions = (page = 1) => fetch('/api/transactions?page=' + page).then((res) => res.json())


    const { isPending, error, data } = useQuery({
        queryKey: ['transactions', selectedPage],
        queryFn: () => fetchTransactions(selectedPage)
    })

    if (isPending)
        return "Loading"

    return (
        <div className="w-full bg-black py-12 px-6 sm:px-0 flex-grow flex items-center justify-center">
            <div className="w-[95%] sm:w-[70%]">
                <h1 className="text-white text-4xl">Overview</h1>
                <div className="bg-asideBg h-[2px] my-6 sm:my-8 sm:h-[1px]"></div>
                <Summary />
                <div className="flex justify-between text-textLightGray mt-8 text-sm">
                    <p>Latest transactions</p>
                    <p className="cursor-pointer text-white">View all</p>
                </div>
                <div className="table-wrapper bg-asideBg p-4 mt-3 overflow-x-auto">
                    <table className="text-white w-full relative">
                        <thead className="relative bg-trBg text-whiteTransparent text-sm">
                            <tr className="relative z-10">
                                <th className="text-left min-w-[100px] p-2 font-normal">Name</th>
                                <th className="text-left min-w-[100px] p-2 font-normal">Method</th>
                                <th className="text-left min-w-[100px] p-2 font-normal">Created on</th>
                                <th className="text-left min-w-[100px] p-2 font-normal">Amount</th>
                                <th className="text-left min-w-[100px] p-2 font-normal">Status</th>
                                <th className="text-left p-2 font-normal"></th>
                            </tr>
                            <tr className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg border border-borderColor"></tr>
                        </thead>
                        <tbody>
                            {data.data.transactions.map((transaction: any) => (
                                <tr
                                    key={transaction.id}
                                    className="hover:bg-btnHover text-sm"
                                >
                                    <td className="px-4 py-1.5 border-b border-borderColor">{transaction.title}</td>
                                    <td className="px-4 py-1.5 border-b border-borderColor">{transaction.method}</td>
                                    <td className="px-4 py-1.5 border-b border-borderColor">
                                        {moment(transaction.createdAt).format("MM/DD/YYYY")}
                                    </td>
                                    <td className="px-4 py-1.5 border-b border-borderColor">$ {transaction.amount}</td>
                                    <td className="px-4 py-1.5 border-b border-borderColor">
                                        {transaction.status ? (
                                            <button className="bg-green text-white px-2 py-1 rounded text-xs">
                                                Active
                                            </button>
                                        ) : (
                                            <button className="bg-borderColor text-white px-2 py-1 rounded text-xs">
                                                Cancelled
                                            </button>
                                        )}
                                    </td>
                                    <td className="text-center cursor-pointer px-4 py-1.5 border-b border-borderColor group relative">
                                        <p className="relative z-10">...</p>
                                        <div className="bg-btnHover opacity-0 group-hover:opacity-100 text-sm transition-opacity px-[16px] py-[6px] duration-300 border border-borderColor rounded absolute top-[60%] right-[20%] w-[140px] h-full flex justify-start items-center z-20">
                                            View
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Paginate totalPagesCount={data.data.count_of_pages} selected={selectedPage} setPage={setSelectedPage} />
            </div>
        </div>
    );
};

export default Dashboard;
