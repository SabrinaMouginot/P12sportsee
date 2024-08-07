import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { getUserData } from "../API/api";
// import { getUserData, getUserActivities, getUserSessions, getUserPerformances } from "../API/api";

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
import ScoreDonutChart from "../Components/Charts/charts/ScoreDonutChart";
import '../css/ActivityBarChart.css';
import '../css/AverageSessionDurationLineChart.css';
import '../css/PerformanceRadarChart.css';
import '../css/ScoreDonutChart.css';


function Dashbord() {
    const { userId } = useParams();
//     console.log(userId);

    const [data, setData] = useState();

    const [error, setError] = useState(null);

//     useEffect(() => {
//         getUserData(userId).then(userData => setData(userData))
//     }, [userId]); // Ajout de userId comme dépendance

    useEffect(() => {
        async function fetchAllData() {
            try {
                const userData = await getUserData(userId);
                setData(userData);
            } catch (err) {
                setError(err);
            }
        }

        fetchAllData();
    }, [userId]);

    if (error) {
        return <NotFound />;
    }

//     if (!data) {
//         return <NotFound />;
//     } else {

if (!data) {
    return <div>Loading...</div>;
}
    return (
        <div className="dashbord">
            <div className="container">
                <div className="txtContainer">
                    <h1>Bonjour <span className="prenom">{data.firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                
                <div className="grid-container">
                    <ActivityBarChart userId={userId} />
                    <div className="nutriments">
                        <Nutriment icon={caloriesIcon} value={`${data.calorieCount}kcal`} label="Calories" />
                        <Nutriment icon={proteinesIcon} value={`${data.proteinCount}g`} label="Protéines" />
                        <Nutriment icon={glucidesIcon} value={`${data.carbohydrateCount}g`} label="Glucides" />
                        <Nutriment icon={lipidesIcon} value={`${data.lipidCount}g`} label="Lipides" />
                    </div>
                    <div className="bottom-row">
                        <div className="item duree">
                            <AverageSessionDurationLineChart userId={userId} />
                        </div>
                        <div className="item perf">
                            <PerformanceRadarChart userId={userId} />
                        </div>
                        <div className="item score">
                            <ScoreDonutChart score={data.score} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
//         return (
//             <div className="dashbord">
//                 <div className="container">
//                     <div className="txtContainer">
//                         <h1>Bonjour <span className="prenom">{data.firstName}</span></h1>
//                         <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
//                     </div>
//                     <div className="grid-container">
//                         <ActivityBarChart userId={userId} />
//                         <div className="nutriments">
//                             <Nutriment icon={caloriesIcon} value={`${data.calorieCount}kcal`} label="Calories" />
//                             <Nutriment icon={proteinesIcon} value={`${data.proteinCount}g`} label="Protéines" />
//                             <Nutriment icon={glucidesIcon} value={`${data.carbohydrateCount}g`} label="Glucides" />
//                             <Nutriment icon={lipidesIcon} value={`${data.lipidCount}g`} label="Lipides" />
//                         </div>
//                         <div className="bottom-row">
//                             <div className="item duree">
//                                 <AverageSessionDurationLineChart userId={userId} />
//                             </div>
//                             <div className="item perf">
//                             <PerformanceRadarChart userId={userId} />
//                             </div>
//                             <div className="item score">
//                             <ScoreDonutChart score={data.score}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Dashbord;
