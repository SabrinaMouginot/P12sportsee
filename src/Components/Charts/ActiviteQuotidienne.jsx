import '../../css/ActiviteQuotidienne.css';
import Oval from '../../assets/Oval.svg';
import OvalRed from '../../assets/OvalRed.svg';

function ActiviteQuotidienne() {
    return (
        <div className="activity">
            <p className='title'>Activité quotidienne</p>
            <p><img src= {Oval} alt="pastille bleu" /> Poids (kg)</p>
            <p><img src= {OvalRed} alt="pastille bleu" /> Calories brûlées (kCal)</p>
        </div>
    );
}

export default ActiviteQuotidienne;