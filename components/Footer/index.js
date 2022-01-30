import Image from 'next/image';
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import Youtube from '../../assets/img/youtube.svg'

const Footer = () => (
    <footer>
        <nav>
            <ul>
                <li><a href=""><Image src={Facebook} /></a></li>
                <li><a href=""><Image src={Instagram} /></a></li>
                <li><a href=""><Image src={Youtube} /></a></li>
            </ul>
        </nav>
        <div>
            <div>© CYAN STORM GAME STUDIO 2015</div>
            <div>WWW.CYANSTORM.COM</div>
        </div>
    </footer>
);

export default Footer;