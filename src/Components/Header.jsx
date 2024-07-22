import logo from '../assets/logo.svg';

function Header() {
    return (
            <div className="Header">
                <img src={logo} alt="logo SportSee" />
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
    );
}

export default Header;