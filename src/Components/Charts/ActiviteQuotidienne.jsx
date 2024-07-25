import '../../css/ActiviteQuotidienne.css';
import Oval from '../../assets/Oval.svg';
import OvalRed from '../../assets/OvalRed.svg';

function ActiviteQuotidienne() {
    return (
        <div className="activity">
            <div className="legend">
                <p className='title'>Activité quotidienne</p>
                <div className="right-items">
                    <p><img src={Oval} alt="pastille bleu" /> Poids (kg)</p>
                    <p><img src={OvalRed} alt="pastille bleu" /> Calories brûlées (kCal)</p>
                </div>
            </div>
        </div>
    );
}

export default ActiviteQuotidienne;