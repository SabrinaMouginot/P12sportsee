import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';
import '../../../sass/ScoreDonutChart.scss';

function ScoreDonutChart({ userId }) {
    const [score, setScore] = useState(0); // Assurez-vous que la valeur initiale est 0, pas un tableau

    useEffect(() => {
        // Appel API pour récupérer les données utilisateur
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                const userData = response.data.data;

                // Vérifier si les données contiennent 'score' ou 'todayScore'
                const userScore = userData.score || userData.todayScore || 0;
                setScore(userScore);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, [userId]);

    // Données pour le graphique en donut
    const data = [
        { name: 'Score', value: score },
        { name: 'Reste', value: 1 - score },
    ];

    const scoreEndAngle = 90 + 360 * score; // Calculer l'angle de fin pour l'arc rouge

    return (
        <div className="chart-wrapper">
            <h2 className="title">Score</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    {/* Cercle de base (blanc) */}
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={450} // Le cercle complet
                        fill="#FFFFFF"
                        stroke="none" // Retirer la bordure
                    />
                    {/* Cercle de base (blanc) */}
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="0%"
                        outerRadius="70%"
                        startAngle={90}
                        endAngle={450} // Le cercle complet
                        fill="#FFFFFF"
                        stroke="none" // Retirer la bordure
                    />
                    {/* Arc de score (rouge) */}
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={scoreEndAngle}
                        fill="#FF0000"
                        // Important d'utiliser `fill` ici pour la couleur
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="score-text"
                    >
                        {`${(score * 100).toFixed(0)}%`}
                        <tspan x="50%" dy="1.2em" className="score-subtext">
                            de votre objectif
                        </tspan>
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreDonutChart;
