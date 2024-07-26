// import '../../css/Proteines.css'
// import proteines from '../../assets/nutriments/protein-icon.svg';
import Nutriment from './Nutriment';
import proteinesIcon from '../../assets/nutriments/protein-icon.svg';

function Proteines() {
    return (
        // <div className="proteines">
        //     <img src={proteines} alt="représentation des protéines" />
        //     <div className="text-container">
        //         <p className='valeurs'>155g</p>
        //         <p>Protéines</p>
        //     </div>
        // </div>
        <Nutriment icon={proteinesIcon} value="155g" label="Protéines" />
    );
}

export default Proteines;