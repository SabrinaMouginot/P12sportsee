import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function ActivityBarChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/12/activity')
        .then(response => {
            setData(response.data.data.sessions);
        })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
                <Bar dataKey="calories" fill="#E60000" name="Calories (kCal)" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityBarChart;
