import '../../css/Nutriment.css'

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

export default Nutriment;
