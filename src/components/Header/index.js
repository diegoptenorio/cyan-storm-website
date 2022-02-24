import { Link } from "react-router-dom";

import Logo from '../../assets/img/logo.svg';

const Header = () => (
    <header className="relative z-10">
        <nav>
            <ul className="flex md:flex-row flex-col mb-[20px] md:mb-0 uppercase text-center text-white font-bold">
                <li className="grow md:order-1 order-2 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300">
                    <Link to="/">News</Link>
                </li>
                <li className="grow md:order-2 order-3 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300">
                    <Link to="/about">About</Link>
                </li>
                <li className="grow-0 md:order-3 order-1"><img src={Logo} alt="logo" /></li>
                <li className="grow order-4 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300">
                    <Link to="/releases">Releases</Link>
                </li>
                <li className="grow order-5 self-center border-b border-light-blue md:pb-[20px] md:my-0 my-[30px] hover:border-dark-blue hover:text-cyan duration-300">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;