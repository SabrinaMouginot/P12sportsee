import '../../css/Proteines.css'
import proteines from '../../assets/nutriments/protein-icon.svg';

function Proteines() {
    return (
        <div className="proteines">
            <img src={proteines} alt="représentation des protéines" />
            <p>Protéines</p>
        </div>
    );
}

export default Proteines;