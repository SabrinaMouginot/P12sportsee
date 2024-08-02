import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import '../../../sass/ScoreDonutChart.scss';
import axios from 'axios';

function ScoreDonutChart({ userId }) {
    const [data, setdata] = useState(0); // État pour stocker le score
    
    useEffect(() => {
        // Appel API pour récupérer les données utilisateur
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                setdata(response.data.data);
    
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
    
        fetchData();
    }, [userId]);
    

    return (
        <div className="chart-wrapper">
            <h2 className="title">Score</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie data={data} dataKey="value">
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        <tspan x="50%" dy="1.2em" className="score-subtext">
                           12% de votre objectif
                        </tspan>
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreDonutChart;
