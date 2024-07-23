import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../css/Dashbord.css';


function Dashbord() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <div className="container">
                <h1>Bonjour <span className="prenom">Thomas</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>


                <div className="grid-container">
                    <div className="activity">Activité quotidienne</div>
                    <div className="nutiments">Nutriments</div>
                    <div className="bottom-row">
                        <div className="item duree">Durée moyenne des sessions</div>
                        <div className="item perf">Performance</div>
                        <div className="item score">Score</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashbord;