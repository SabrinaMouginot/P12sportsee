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
        <div className="chart-wrapper">            
        <h2 className="title">Durée moyenne des sessions</h2>
        
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray={false} vertical={false} horizontal={false} />
                <XAxis dataKey="day" tick={{ fill: '#FBFBFB' }} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#FBFBFB" strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}


export default AverageSessionDurationLineChart;
