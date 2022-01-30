import Image from 'next/image';
import Logo from '../../assets/img/logo.svg';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>News</li>
                <li>About</li>
                <li><Image src={Logo} alt="logo" /></li>
                <li>Releases</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
);

export default Header;