import '../../css/ActiviteQuotidienne.css';
import Oval from '../../assets/Oval.svg';

function ActiviteQuotidienne() {
    return (
        <div className="activity">
            <h2>Activité quotidienne</h2>
            <p><img src= {Oval} alt="pastille bleu" /> Poids (kg)</p>
            
        </div>
    );
}

export default ActiviteQuotidienne;