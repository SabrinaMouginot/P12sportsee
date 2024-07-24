import '../../css/Lipides.css'
import lipides from '../../assets/nutriments/fat-icon.svg';

function Lipides() {
    return (
        <div className="lipides">
            <img src={lipides} alt="représentation des lipides" />
            <div className="text-container">
                <p className='valeurs'>50g</p>
                <p>Lipides</p>
            </div>
        </div>
    );
}

export default Lipides;