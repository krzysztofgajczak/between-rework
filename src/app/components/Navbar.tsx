'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [navbarBg, setNavbarBg] = useState('transparent');
    const [dividerColor, setDividerColor] = useState('primary');

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setNavbarBg('secondary');
            setDividerColor('complementary')
        } else {
            setNavbarBg('transparent');
            setDividerColor('primary')
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar-container flex justify-between items-center fixed top-0 w-full bg-${navbarBg} p-4 z-10 transition-all duration-700`}>
            <Image src="/logo.png" alt="logo" width={100} height={50} />

            {/* Mobile Menu */}
            <div className="lg:hidden flex">
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {menuOpen && (
                    <ul className={`li-container px-2  text-white divide-x ${dividerColor === 'complementary' ? 'divide-complementary' : 'divide-primary'} flex`}>
                        <Link href="#main-section">
                            <li className="cursor-pointer hover:underline text-lg px-3">GŁÓWNA</li>
                        </Link>
                        <Link href="#menu-section">
                            <li className="cursor-pointer hover:underline text-lg px-3">MENU</li>
                        </Link>
                        <Link href="#offer-section">
                            <li className="cursor-pointer hover:underline text-lg px-3">OFERTA</li>
                        </Link>
                        <Link href="#contact-section">
                            <li className="cursor-pointer hover:underline text-lg px-3">KONTAKT</li>
                        </Link>
                    </ul>
                )}
            </div>

            {/* Regular Desktop Menu */}
            <ul className={`hidden lg:flex divide-x ${dividerColor === 'complementary' ? 'divide-complementary' : 'divide-primary'} text-white`}>
                <Link href="#main-section">
                    <li className="cursor-pointer hover:underline text-lg px-3">GŁÓWNA</li>
                </Link>
                <Link href="#menu-section">
                    <li className="cursor-pointer hover:underline text-lg px-3">MENU</li>
                </Link>
                <Link href="#offer-section">
                    <li className="cursor-pointer hover:underline text-lg px-3">OFERTA</li>
                </Link>
                <Link href="#contact-section">
                    <li className="cursor-pointer hover:underline text-lg px-3">KONTAKT</li>
                </Link>
            </ul>
        </header>
    );
};

export default Navbar;