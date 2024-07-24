import '../../css/Calories.css';
import calories from  '../../assets/nutriments/calories-icon.svg';

function Calories() {
    return (
        <div className="calories">
            <img src={calories} alt="représentation des calories" />
            <p>Calories</p>
        </div>
    );
}

export default Calories;