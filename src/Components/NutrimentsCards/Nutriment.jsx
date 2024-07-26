import '../../css/Nutriment.css'
import PropTypes from 'prop-types';


function Nutriment({ icon, value, label }) {
    return (
        <div className="nutriment">
            <img src={icon} alt={`représentation des ${label}`} />
            <div className="text-container">
                <p className='valeurs'>{value}</p>
                <p>{label}</p>
            </div>
        </div>
    );
}

Nutriment.propTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
};

export default Nutriment;
