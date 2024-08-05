import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import PropTypes from 'prop-types';

function AverageSessionDurationLineChart({ userId }) {
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
        <div className="chart-wrapper duree">
            <h2 className="title">Durée moyenne des sessions</h2>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart 
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <XAxis 
                        dataKey="day" 
                        tick={{ fill: '#FBFBFB' }} 
                        tickLine={false} // Supprime les petits traits sur l'axe des abscisses
                        axisLine={false} // Supprime la ligne de l'axe des abscisses
                    />
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="sessionLength" 
                        stroke="#FBFBFB" 
                        strokeWidth={2} 
                        fill="url(#colorRed)" // Utilisation d'un dégradé pour remplir l'espace sous la courbe
                    />
                    <defs>
                        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF0000" stopOpacity={1} />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.11)" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

AverageSessionDurationLineChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default AverageSessionDurationLineChart;
