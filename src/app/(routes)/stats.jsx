"use client"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
    {
        revenue: 10400,
        subscription: 240,
    },
    {
        revenue: 14405,
        subscription: 300,
    },
    {
        revenue: 9400,
        subscription: 200,
    },
    {
        revenue: 8200,
        subscription: 278,
    },
    {
        revenue: 7000,
        subscription: 189,
    },
    {
        revenue: 9600,
        subscription: 239,
    },
    {
        revenue: 11244,
        subscription: 278,
    },
    {
        revenue: 26475,
        subscription: 189,
    },
]

export function CardsStats() {


    return (
        <div className="">

            <div className="h-[80px] w-[80px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 0,
                        }}
                    >
                        <Line
                            type="monotone"
                            color="#D500E7"
                            strokeWidth={2}
                            dataKey="revenue"
                            activeDot={{
                                r: 6,
                                style: { fill: "#D500E7", opacity: 0.25 },
                            }}
                            style={
                                {
                                    stroke: "#D500E7)",
                                    "#D500E7": "#D500E7",
                                }
                            }
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>


        </div>
    )
}