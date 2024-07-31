import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import '../../../sass/ScoreDonutChart.scss';

function ScoreDonutChart({ userId }) {

    return (
        <div className="chart-wrapper">
            <h2 className="title">Score</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie dataKey="value">
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
