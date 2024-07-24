import '../../css/Lipides.css'
import lipides from '../../assets/nutriments/fat-icon.svg';

function Lipides() {
    return (
        <div className="lipides">
            <img src={lipides} alt="représentation des lipides" />
            <p>Lipides</p>
        </div>
    );
}

export default Lipides;