// import '../../css/Glucides.css'
// import glucides from '../../assets/nutriments/carbs-icon.svg';
import Nutriment from './Nutriment';
import glucidesIcon from '../../assets/nutriments/carbs-icon.svg';

function Glucides() {
    return (
        // <div className="glucides">
        //     <img src={glucides} alt="représentation des glucides" />
        //     <div className="text-container">
        //         <p className='valeurs'>290g</p>
        //         <p>Glucides</p>
        //     </div>
        // </div>
        <Nutriment icon={glucidesIcon} value="290g" label="Glucides" />
    );
}

export default Glucides;