import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import PropTypes from 'prop-types';

function PerformanceRadarChart({ userId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}/performance`)
            .then(response => {
                setData(response.data.data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    // Libellés personnalisés
    const labels = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio'
    ];

    return (
        <div className="chart-wrapper perf">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data}>
                    <PolarGrid />
                    <PolarAngleAxis
                        tickFormatter={(index) => labels[index]} // Formater les labels
                        tick={{ fill: '#FFFFFF', fontSize: 12 }} // Couleur et taille des labels
                    />
                    <Radar dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

PerformanceRadarChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default PerformanceRadarChart;
