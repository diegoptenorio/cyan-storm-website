import Image from 'next/image';
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import Youtube from '../../assets/img/youtube.svg'

const Footer = () => (
    <footer>
        <nav className='bg-white mt-[50px] py-[40px]'>
            <ul className='flex flex-row justify-evenly max-w-screen-lg left-0 right-0	mx-auto'>
                <li><a href=""><Image src={Facebook} /></a></li>
                <li><a href=""><Image src={Instagram} /></a></li>
                <li><a href=""><Image src={Youtube} /></a></li>
            </ul>
        </nav>
        <div className="text-white text-[15px] flex flex-row justify-between py-[30px] max-w-screen-lg left-0 right-0	mx-auto">
            <div>© CYAN STORM GAME STUDIO 2015</div>
            <div>WWW.CYANSTORM.COM</div>
        </div>
    </footer>
);

export default Footer;