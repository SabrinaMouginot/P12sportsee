// import '../../css/Calories.css';
// import calories from '../../assets/nutriments/calories-icon.svg';
import Nutriment from './Nutriment';
import caloriesIcon from '../../assets/nutriments/calories-icon.svg';
import '../../css/Nutriment.css'

function Calories() {
    return (
        // <div className="calories">
        //     <img src={calories} alt="représentation des calories" />
        //     <div className="text-container">
        //         <p className='valeurs'>1,930kCal</p>
        //         <p>Calories</p>
        //     </div>
        // </div>
        <Nutriment icon={caloriesIcon} value="1,930kCal" label="Calories" />
    );
}

export default Calories;