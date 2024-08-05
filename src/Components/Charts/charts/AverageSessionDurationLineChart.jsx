import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import PropTypes from 'prop-types';

function CustomCursor({ points, width, height }) {
    const { x } = points[0]; // La position en x du point actif
    return (
        <rect
            x={x} // Positionner le rectangle à la position du point actif
            y={0} // Le rectangle commence en haut du graphique
            width={width - x} // Le rectangle couvre toute la largeur à partir du point actif jusqu'au bord droit
            height={height} // Le rectangle couvre toute la hauteur du graphique
            fill="#000" // Couleur de fond
            opacity={0.0975} // Opacité appliquée
        />
    );
}

CustomCursor.propTypes = {
    points: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    })),
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

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


    // Mappage des numéros de jours aux lettres des jours de la semaine
    const daysOfWeek = {
        1: 'L', // Lundi
        2: 'M', // Mardi
        3: 'M', // Mercredi
        4: 'J', // Jeudi
        5: 'V', // Vendredi
        6: 'S', // Samedi
        7: 'D', // Dimanche
    };

    // Tooltip personnalisé
    const CustomTooltip = ({ active, payload }) => { //payload affiche des informations sur les données survolées dans un graphique.
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    // Validation des props pour CustomTooltip
    CustomTooltip.propTypes = {
        active: PropTypes.bool,  // active est un booléen
        payload: PropTypes.arrayOf( //la prop payload que le composant CustomTooltip attend doit être un tableau.
            PropTypes.shape({ // shape définit la forme spécifique de l'objet
                value: PropTypes.number.isRequired,  // payload doit être un tableau avec des objets contenant une valeur numérique
            })
        ),
    };

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
                        tickFormatter={(value) => daysOfWeek[value]} // Remplace les chiffres par les lettres
                        tick={{ fill: '#FBFBFB' }}
                        tickLine={false} // Supprime les petits traits sur l'axe des abscisses
                        axisLine={false} // Supprime la ligne de l'axe des abscisses
                    />
                    <Tooltip content={<CustomTooltip />}
                        cursor={<CustomCursor />}
                    />
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
