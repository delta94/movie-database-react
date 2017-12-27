import logo from '../../images/logo.svg';
import './Header.css';

const Header = () =>
    <header>
        <a href="/">
            <h1>
                <img src={logo} alt="Movie logo" />
                <span className="title">Movie</span>
            </h1>
        </a>
        <hr />
    </header>;

export default Header;