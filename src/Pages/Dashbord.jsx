import { useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from 'react';

import '../css/Dashbord.css';
import NotFound from "./NotFound";

import Nutriment from "../Components/NutrimentsCards/Nutriment";
import caloriesIcon from '../assets/nutriments/calories-icon.svg';
import glucidesIcon from '../assets/nutriments/carbs-icon.svg';
import lipidesIcon from '../assets/nutriments/fat-icon.svg';
import proteinesIcon from '../assets/nutriments/protein-icon.svg';

import ActivityBarChart from "../Components/Charts/charts/ActivityBarChart";
import AverageSessionDurationLineChart from "../Components/Charts/charts/AverageSessionDurationLineChart";
import PerformanceRadarChart from "../Components/Charts/charts/PerformanceRadarChart";
import Score from "../Components/Charts/Score";
import '../css/ActivityBarChart.css';
import '../css/AverageSessionDurationLineChart.css';
import '../css/PerformanceRadarChart.css';

function Dashbord() {
    const { userId } = useParams();
    console.log(userId);

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userId}`)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]); // Ajout de userId comme dépendance

    if (!data) {
        return <NotFound />;
    } else {
        return (
            <div className="dashbord">
                <div className="container">
                    <div className="txtContainer">
                        <h1>Bonjour <span className="prenom">{data.userInfos.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="grid-container">
                        <ActivityBarChart userId={userId} />
                        <div className="nutriments">
                            <Nutriment icon={caloriesIcon} value={`${data.keyData.calorieCount}kcal`} label="Calories" />
                            <Nutriment icon={proteinesIcon} value={`${data.keyData.proteinCount}g`} label="Protéines" />
                            <Nutriment icon={glucidesIcon} value={`${data.keyData.carbohydrateCount}g`} label="Glucides" />
                            <Nutriment icon={lipidesIcon} value={`${data.keyData.lipidCount}g`} label="Lipides" />
                        </div>
                        <div className="bottom-row">
                            <div className="item duree">
                                <AverageSessionDurationLineChart userId={userId} />
                            </div>
                            <div className="item perf">
                            <PerformanceRadarChart userId={userId} />
                            </div>
                            <Score />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashbord;
