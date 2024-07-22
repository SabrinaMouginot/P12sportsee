import bodybuilding from '../assets/bodybuilding.svg';
import bike from '../assets/bike.svg';
import swim from '../assets/swim.svg';
import yoga from '../assets/yoga.svg';

function Footer() {
    return (
        <div className="Footer">
            <ul>
                <li><img src={yoga} alt="image d'un personnage qui fait du yoga"/></li>
                <li><img src={swim} alt="image d'un nageur" /></li>
                <li><img src={bike} alt="image d'un coureur-cycliste" /></li>
                <li><img src={bodybuilding} alt="image d'un haltère" /></li>
                <li>Copyright, SportSee 2024</li>
            </ul>
        </div>
    );
}

export default Footer;
