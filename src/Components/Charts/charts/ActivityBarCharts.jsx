import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function ActivityBarChart({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/activity`) //changer 12 : c'est l'ID
        .then(response => {
            setData(response.data.data.sessions);
        })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#DEDEDE' />
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
                <Bar dataKey="calories" fill="#E60000" name="Calories (kCal)" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ActivityBarChart;
