import type { ReactElement } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricProps {
    title: string;
    icon: ReactElement;
    value: string;
    percentage: number;
}

function MetricCard(props: MetricProps) {
    return (
        <div className="metric-card flex-col items-start p-4 shadow-sm  transition duration-500 hover:shadow-green-500">
            <div className="flex justify-between">
                <span>{props.title}</span>
                <span>{props.icon}</span>
            </div>
            <div className="value text-xl font-bold">{props.value}</div>
            <div className="percentage flex items-center">
                {props.percentage > 0 ?
                        <ArrowUp size={16} strokeWidth={1} />
                        : 
                        <ArrowDown size={16} strokeWidth={1} />

                }
                {props.percentage > 0 ? "+": ""}{props.percentage}%
            </div>
        </div>
    );
}

export default MetricCard;
