import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ActiviteQuotidienne from "../Components/Charts/ActiviteQuotidienne";
import Performance from "../Components/Charts/Performance";
import Duree from "../Components/Charts/SessionMoyenne";
import Score from "../Components/Charts/Score";
import Calories from "../Components/NutrimentsCards/Calories";
import Glucides from "../Components/NutrimentsCards/Glucides";
import Lipides from "../Components/NutrimentsCards/Lipides";
import Proteines from "../Components/NutrimentsCards/Proteines";
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
                    <ActiviteQuotidienne />
                    <div className="nutiments">
                        <Calories />
                        <Proteines />
                        <Glucides />
                        <Lipides />
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

export default Dashbord;

