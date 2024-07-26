import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

function ActivityBarChart() {
    return (
        <ResponsiveContainer width="100%">
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