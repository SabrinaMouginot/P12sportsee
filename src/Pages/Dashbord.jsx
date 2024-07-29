import ActivityBarChart from "../Components/Charts/charts/ActivityBarCharts";
import Performance from "../Components/Charts/Performance";
import Duree from "../Components/Charts/SessionMoyenne";
import Score from "../Components/Charts/Score";
import Nutriment from "../Components/NutrimentsCards/Nutriment";
import caloriesIcon from '../assets/nutriments/calories-icon.svg';
import glucidesIcon from '../assets/nutriments/carbs-icon.svg';
import lipidesIcon from '../assets/nutriments/fat-icon.svg';
import proteinesIcon from '../assets/nutriments/protein-icon.svg';
import { useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/Dashbord.css';

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
    }, [userId]); //Ajout de userId comme dépendance

    if (!data) {
        return <p>Chargement...</p>
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
                        <div className="nutiments">
                            <Nutriment icon={caloriesIcon} value="1,930kCal" label="Calories" />
                            <Nutriment icon={proteinesIcon} value="155g" label="Protéines" />
                            <Nutriment icon={glucidesIcon} value="290g" label="Glucides" />
                            <Nutriment icon={lipidesIcon} value="50g" label="Lipides" />
                        </div>
                        <div className="bottom-row">
                            <Duree />
                            <Performance />
                            <Score />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashbord;