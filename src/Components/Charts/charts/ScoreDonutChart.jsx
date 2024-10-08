import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import '../../../sass/ScoreDonutChart.scss';
import PropTypes from 'prop-types';
import '../../../css/ScoreDonutChart.css';

function ScoreDonutChart({ score }) {

    // Données pour le graphique en donut
    const data = [
        { name: 'Score', value: score },
        { name: 'Reste', value: 100 - score },
    ];

    const scoreEndAngle = 90 + 360 * score / 100; // Calculer l'angle de fin pour l'arc rouge

    return (
        <div className="chart-wrapper">
            <h2 className="title">Score</h2>
            <ResponsiveContainer width="100%">
                <PieChart>
                    {/* Cercle blanc */}
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="0%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={450} // Le cercle complet
                        fill="#FFFFFF"
                        stroke="none" // Retirer la bordure
                    />

                    {/* Arc de score (rouge) */}
                    <Pie
                        // data={data}
                        data={[{ value: 1 }]} // 1 signifie 100% du cercle
                        dataKey="value"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={scoreEndAngle}
                        fill="#FF0000"
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="score-text"
                    >
                        {`${score}%`}
                        <tspan x="50%" dy="1.2em" className="score-subtext">
                            de votre objectif
                        </tspan>
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

ScoreDonutChart.propTypes = {
    score: PropTypes.number.isRequired,
};

export default ScoreDonutChart;