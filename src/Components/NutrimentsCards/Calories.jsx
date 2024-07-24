import '../../css/Calories.css';
import calories from '../../assets/nutriments/calories-icon.svg';

function Calories() {
    return (
        <div className="calories">
            <img src={calories} alt="représentation des calories" />
            <div className="text-container">
                <p>1,930kCal</p>
                <p>Calories</p>
            </div>
        </div>
    );
}

export default Calories;