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
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;