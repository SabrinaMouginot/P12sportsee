import logo from '../assets/logo.svg';
import sportsee from '../assets/sportsee.svg';
import '../css/Header.css';

function Header() {
    return (
        <div className="Header">
            <nav className="Navbar">
                <div className='Logo'>
                    <img src={logo} alt="logo SportSee" />
                    <img src={sportsee} alt="SportSee" />
                </div>
                <ul className='NavItems'>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;