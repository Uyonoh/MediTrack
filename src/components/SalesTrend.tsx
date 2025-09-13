import { ArrowUp } from "lucide-react";
import SubtleLineChart from "./LineChart";

function SalesTrend() {
    return (
        <div className="col-span-8 trend p-4 m-4 border-b">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="font-bold">Sales Trend</span>
                    <span className=""> Last 12 months</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold">$120,000</span>
                    <span className="flex items-center justify-end percentage">
                        <ArrowUp size={16} strokeWidth={1} />
                        +15%
                    </span>
                </div>
            </div>
            <div className="chart">
                <SubtleLineChart />
            </div>
        </div>
    )
}

export default SalesTrend;