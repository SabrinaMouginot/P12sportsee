import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function AverageSessionDurationLineChart ({userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
        .then(response => {
            console.log('API Response:', response.data); 
            setData(response.data.data.sessions);
        })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    return (
        <ResponsiveContainer width="30%" height={250}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray={false} vertical={false} />
                <XAxis dataKey="day" />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#FBFBFB"/>
            </LineChart>
        </ResponsiveContainer>
    );
}


export default AverageSessionDurationLineChart;
