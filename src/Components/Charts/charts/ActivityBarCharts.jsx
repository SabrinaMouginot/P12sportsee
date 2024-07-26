import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

function ActivityBarChart() {
    return (
        <ResponsiveContainer>
            <BarChart>
                <CartesianGrid />
                <XAxis />
                <Tooltip />
                <Bar />
                <Bar />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ActivityBarChart;