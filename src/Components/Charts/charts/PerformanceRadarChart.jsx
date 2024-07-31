import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function PerformanceRadarChart({ userId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/performance`)
            .then(response => {
                setData(response.data.data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    return (
        <div className="chart-wrapper">
            <h2 className="title">Performance</h2>
            <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={data} >
                    <PolarGrid />
                    <PolarAngleAxis/>
                    <Radar dataKey="value" fill="#FF0101" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceRadarChart;
