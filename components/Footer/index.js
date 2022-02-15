import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import Youtube from '../../assets/img/youtube.svg'

const Footer = () => (
    <footer>
        <nav className='bg-white py-[40px]'>
            <ul className='flex flex-row justify-evenly max-w-screen-lg left-0 right-0	mx-auto'>
                <li><a href="" target="_blank"><img src={Facebook} /></a></li>
                <li><a href="" target="_blank"><img src={Instagram} /></a></li>
                <li><a href="" target="_blank"><img src={Youtube} /></a></li>
            </ul>
        </nav>
        <div className="text-white text-[15px] flex md:flex-row flex-col justify-between py-[30px] max-w-screen-lg left-0 right-0	mx-auto">
            <div className="md:text-left text-center">© CYAN STORM GAME STUDIO 2015</div>
            <div className="md:text-right text-center">WWW.CYANSTORM.COM</div>
        </div>
    </footer>
);

export default Footer;