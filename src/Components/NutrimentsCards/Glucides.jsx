import '../../css/Glucides.css'
import glucides from '../../assets/nutriments/carbs-icon.svg';

function Glucides() {
    return (
        <div className="glucides">
            <img src={glucides} alt="représentation des glucides" />
            <p>Glucides</p>
        </div>
    );
}

export default Glucides;