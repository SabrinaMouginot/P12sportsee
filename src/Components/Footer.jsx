import bodybuilding from '../assets/footer/bodybuilding.svg';
import bike from '../assets/footer/bike.svg';
import swim from '../assets/footer/swim.svg';
import yoga from '../assets/footer/yoga.svg';
import '../css/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <ul className='Sport'>
                <li><img src={yoga} alt="image d'un personnage qui fait du yoga"/></li>
                <li><img src={swim} alt="image d'un nageur" /></li>
                <li><img src={bike} alt="image d'un coureur-cycliste" /></li>
                <li><img src={bodybuilding} alt="image d'un haltère" /></li>
            </ul>
            <p>Copyright, SportSee 2024</p>
        </div>
    );
}

export default Footer;
