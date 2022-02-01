import Head from "next/head"
import Link from 'next/link'

import Image from 'next/image';
import Logo from '../../assets/img/logo.svg';

const Header = () => (
    <>
        <Head>
            <title>Cyan Storm - Game Studio</title>
        </Head>
        <header className="relative z-10">
            <nav>
                <ul className="flex flex-row uppercase text-center text-white font-bold">
                    <li className="grow self-center border-b border-light-blue pb-[20px] hover:border-dark-blue hover:text-cyan duration-300">
                        <Link href="/">
                            <a>News</a>
                        </Link>
                    </li>
                    <li className="grow self-center border-b border-light-blue pb-[20px] hover:border-dark-blue hover:text-cyan duration-300">
                        <Link href="/About">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="grow-0"><Image src={Logo} alt="logo" /></li>
                    <li className="grow self-center border-b border-light-blue pb-[20px] hover:border-dark-blue hover:text-cyan duration-300">
                        <Link href="/Releases">
                            <a>Releases</a>
                        </Link>
                    </li>
                    <li className="grow self-center border-b border-light-blue pb-[20px] hover:border-dark-blue hover:text-cyan duration-300">
                        <Link href="/Contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
);

export default Header;