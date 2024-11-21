import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    TooltipProps,
} from "recharts";
import { LitecoinIcon, BitcoinIcon, EthIcon } from "../Icons/Index";

type DataPoint = {
    name: string;
    value: number;
};


const data: DataPoint[] = [
    { name: "Q1", value: 4000 },
    { name: "Q2", value: 4528 },
    { name: "Q3", value: 4200 },
    { name: "Q4", value: 4600 },
];


function CustomTooltip({ active, payload} : TooltipProps<number, string>) : JSX.Element|null
{
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 text-white p-3 rounded shadow-lg">
                <h3 className="text-lg font-bold">${payload[0].value} USD</h3>
                <p className="text-sm">
                    Polkadot unites and secures a growing ecosystem of
                    specialized blocks.
                </p>
            </div>
        );
    }
    return null;
}

export default function CryptoGraph (): JSX.Element
{
    return (
        <div className="text-green-400 p-5 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#84e56f" }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#84e56f"
                        strokeWidth={2}
                        dot={{ stroke: "#84e56f", strokeWidth: 2, r: 4 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>

            <div className="flex justify-between mt-6">
                <div className="flex items-center space-x-2">
                    <BitcoinIcon size={24} />
                    <div>
                        <h4 className="text-white font-bold">$4,528 USD</h4>
                        <p className="text-sm">
                            Polkadot unites and secures...
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <LitecoinIcon size={24} />
                    <div>
                        <h4 className="text-white font-bold">1,44,528 BTC</h4>
                        <p className="text-sm">
                            Polkadot unites and secures...
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <EthIcon size={24} />
                    <div>
                        <h4 className="text-white font-bold">$4,528 USD</h4>
                        <p className="text-sm">
                            Polkadot unites and secures...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};