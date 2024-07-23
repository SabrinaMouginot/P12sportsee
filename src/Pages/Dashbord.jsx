import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../css/Dashbord.css';


function Dashbord() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <div className="container">
                <h1>Bonjour Thomas</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

        </div>
    );
}

export default Dashbord;