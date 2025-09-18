import SubtleLineChart from "../components/LineChart";
import { ArrowUp } from "lucide-react";
import TotalSalesTable from "../components/SalesTable";

function SalesAnalytics() {
    return(
        <div className="p-10">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-3xl pb-2">
                        Sales Analytics
                    </span>
                    <span>
                        Analyze sales performance across different time periods
                    </span>
                </div>
                <div className="flex align-center p-5">
                    <span className="border border-green-400 rounded-sm p-2 mx-2 hover:cursor-pointer hover:bg-green-100 transition-color duration-300">Last 7 Days</span>
                    <span className="border border-green-400 rounded-sm p-2 mx-2 hover:cursor-pointer hover:bg-green-100 transition-color duration-300">Last 30 Days</span>
                </div>
                </div>
            <section className="">
                <div className="border border-[#aab3ab24] rounded-lg flex flex-col p-5">
                    <div className="flex flex-col flex-1">
                        <span className="font-bold text-lg">Total Sales</span>
                        <span className="font-bold text-4xl">$25,450</span>
                        <span className="flex gap-2">
                            <span>Last 30 Days</span>
                            <span className="flex items-center justify-end percentage text-green-600">
                                <ArrowUp size={16} strokeWidth={1} />
                                +12%
                            </span>
                        </span>
                    </div>
                    <SubtleLineChart className="" />
                </div>
            </section>

            <section className="grid sm:grid-cols-3 gap-4 p-5">
                <div className="border border-[#aab3ab24] rounded-sm h-70 flex flex-col gap-3 p-5">
                    <h2 className="pb-2 font-bold">Sales by Category</h2>
                    {/* Make bar chart */}
                </div>
                <div className="border border-[#aab3ab24] rounded-sm h-70 flex flex-col gap-3 p-5">
                    <h2 className="pb-2 font-bold">Top Selling Products</h2>
                    <div className="flex justify-between">
                        <p>Product A</p>
                        <p>$5,000</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Product B</p>
                        <p>$7,500</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Product C</p>
                        <p>$3,000</p>
                    </div>
                </div>
            </section>

            <section>
                <TotalSalesTable className="border border-[#aab3ab24] rounded-lg" />
            </section>
        </div>
    );
}

export default SalesAnalytics;