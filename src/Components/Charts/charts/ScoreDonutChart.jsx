// import { useEffect, useState } from 'react';
// import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
// import '../../../sass/ScoreDonutChart.scss';
// import axios from 'axios';

// function ScoreDonutChart({ userId }) {
//     const [score, setScore] = useState(0); // État pour stocker le score

//     useEffect(() => {
//         // Appel API pour récupérer les données utilisateur
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/user/${userId}`);
//                 const userData = response.data.data;

//                 // Vérifier si les données contiennent 'score' ou 'todayScore'
//                 const userScore = userData.score || userData.todayScore || 0;
//                 setScore(userScore);

//             } catch (error) {
//                 console.error('Erreur lors de la récupération des données:', error);
//             }
//         };

//         fetchData();
//     }, [userId]);

//     // Données pour le graphique en donut
//     const data = [
//         { name: 'Score', value: score },
//         { name: 'Reste', value: 1 - score },
//     ];

//     return (
//         <div className="chart-wrapper">
//             <h2 className="title">Score</h2>
//             <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                     <Pie data={data} dataKey="value">
//                     <Cell key="score" fill="#FF0000" />
//                     <Cell key="rest" fill="#FBFBFB" />
//                     </Pie>
//                     <text
//                         x="50%"
//                         y="50%"
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                     >
//                         <tspan x="50%" dy="1.2em" className="score-subtext">
//                             12% de votre objectif
//                         </tspan>
//                     </text>
//                 </PieChart>
//             </ResponsiveContainer>
//         </div>
//     );
// }

// export default ScoreDonutChart;

import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import '../../../sass/ScoreDonutChart.scss';

function ScoreDonutChart({ userId }) {
    const [score, setScore] = useState(0); // État pour stocker le score

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

    return (
        <div className="chart-wrapper">
            <h2 className="title">Score</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={450}
                        fill="#FF0000"
                    >
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="score-text"
                    >
                        {`${score * 100}%`}
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
