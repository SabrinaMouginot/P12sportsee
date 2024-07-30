import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../../../sass/ActivityBarChart.scss';

function ActivityBarChart({ userId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/activity`)
            .then(response => {
                setData(response.data.data.sessions);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    return (
        <div className="chart-wrapper">
            <h2 className="title">Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#DEDEDE' />
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Legend
                        iconType="circle"
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ top: -29, right: 0 }}
                    />
                    <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
                    <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

ActivityBarChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default ActivityBarChart;
