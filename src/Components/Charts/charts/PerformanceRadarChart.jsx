import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { getUserPerformances } from '../../../API/api';
// import { UserPerformance } from '../../../API/user.model';
import'../../../css/PerformanceRadarChart.css';

function PerformanceRadarChart({ userId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUserPerformances(userId).then(userData => setData(userData));
    }, [userId]);
    
    // // Libellés personnalisés
    // const labels = [
    //     'Intensité',
    //     'Vitesse',
    //     'Force',
    //     'Endurance',
    //     'Energie',
    //     'Cardio'
    // ];

    return (
        <div className="chart-wrapper perf">
            <ResponsiveContainer width="95%" height="95%">
                <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="type" // Utilisez le dataKey pour récupérer les libellés personnalisés
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
