import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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

    // Fonction pour customiser le tooltip
    const CustomTooltip = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} kg`}</p>
                    <p className="label">{`${payload[1].value} kCal`}</p>
                </div>
            );
        }
        return null;
    };

    // Ajout des propTypes pour le CustomTooltip
    CustomTooltip.propTypes = {
        payload: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number.isRequired, // Valide que `value` est un nombre
            })
        ).isRequired,
    };

    return (
        <div className="chart-wrapper">
            <h2 className="title">Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barGap={10} barCategoryGap={50}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#DEDEDE' />
                    <XAxis 
                        dataKey="day" 
                        tickFormatter={(value, index) => index + 1} // Remplace les dates par une numérotation
                        axisLine={false} // Supprime la ligne de l'axe des abscisses
                        tickLine={false} // Supprime les petits traits de l'axe des abscisses
                    />
                    <YAxis 
                        orientation="right" 
                        axisLine={false} // Supprime la ligne de l'axe des ordonnées
                        tickLine={false} // Supprime les petits traits de l'axe des ordonnées
                        tick={{ fill: '#9B9EAC', fontSize: 12 }} // Style des valeurs de l'axe des ordonnées
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        iconType="circle"
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ top: -29, right: 0 }}
                    />
                    <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={10} radius={[4, 4, 0, 0]}/>
                    <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={10} radius={[4, 4, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

ActivityBarChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default ActivityBarChart;
