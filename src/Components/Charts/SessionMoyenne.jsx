import '../../css/SessionMoyenne.css';
import AverageSessionDurationLineChart from './charts/AverageSessionDurationLineChart';

function Duree() {
    return (
        <div className="item duree">
            <p>
                Durée moyenne des sessions
            </p>
            <AverageSessionDurationLineChart/>
        </div>
    );
}

export default Duree;