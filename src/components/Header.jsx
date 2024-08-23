import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import MobileNav from './MobileNav';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Header() {
    const navigate = useNavigate();
    const [scroll, setScrolled] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const sections = ["hero", "skills", "projects", "contact"];

    const handleScroll = () => {
        if (isScrolling) return;

        const scrollY = window.scrollY;
        const sectionHeight = window.innerHeight;
        const newScroll = Math.round(scrollY / sectionHeight);

        if (newScroll !== scroll) {
            setScrolled(newScroll);
        }
    };

    const handleWheel = (event) => {
        if (isScrolling) return;

        setIsScrolling(true);

        let newScroll = scroll;
        if (event.deltaY > 0) {
            newScroll = Math.min(scroll + 1, sections.length - 1);
        } else {
            newScroll = Math.max(scroll - 1, 0);
        }

        setScrolled(newScroll);
        window.scrollTo({
            top: window.innerHeight * newScroll,
            behavior: 'smooth'
        });

        setTimeout(() => setIsScrolling(false), 600);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel", handleWheel);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [scroll, isScrolling]);

    const handleScrollClick = (index) => {
        if (isScrolling || index === scroll) return;

        setIsScrolling(true);
        setScrolled(index);
        window.scrollTo({
            top: window.innerHeight * index,
            behavior: 'smooth'
        });

        setTimeout(() => setIsScrolling(false), 600);
    };

    const handleScrollButtonClick = (direction) => {
        if (isScrolling) return;

        const newScroll = direction === 'down'
            ? Math.min(scroll + 1, sections.length - 1)
            : scroll > 2
                ? Math.max(scroll - 3, 0)
                : Math.max(scroll - 2, 1);

        setIsScrolling(true);
        setScrolled(newScroll);
        window.scrollTo({
            top: window.innerHeight * newScroll,
            behavior: 'smooth'
        });

        setTimeout(() => setIsScrolling(false), 600);
    };

    return (
        <div className="relative z-50">
            <span className="absolute top-0 left-0 p-4 cursor-pointer">
                <h1
                    className="text-2xl font-bold bg-gradient-to-r from-gray-50 to-blue-100 bg-clip-text text-transparent uppercase"
                    onClick={() => navigate("/")}
                >
                    NAKO
                </h1>
            </span>

            {/* Conditionally render the social media icons based on showNav and scroll */}
            {!showNav && scroll === 0 && (
                <div className="fixed top-1/2 left-4 transform -translate-y-1/2 text-white">
                    <ul className="flex flex-col items-start space-y-6 text-xl mt-14">
                        <li>
                            <a
                                href="https://github.com/nahjd"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <BsGithub size={30} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/nahid-memmedov-7b349b237/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <FaLinkedinIn size={30} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/nahjd._/?next=%2F"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <AiFillInstagram size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <div className="hidden md:flex fixed top-1/2 right-0 transform -translate-y-1/2 text-white">
                <ul className="flex flex-col items-end space-y-4 text-lg">
                    {sections.map((section, index) => (
                        <li key={section} className="relative flex items-center">
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer flex items-center ${scroll === index ? "text-red-500" : "text-gray-500"} transition-colors duration-300 ease-in-out`}
                                onClick={() => handleScrollClick(index)}
                            >
                                <span className="text-2xl mr-2">0{index}</span>
                                {scroll === index && (
                                    <div className="w-1 h-6 bg-red-500 ml-1 rounded transition-transform duration-300 ease-in-out"></div>
                                )}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fixed top-[calc(50%+150px)] right-0 text-sm text-gray-400 hidden md:flex">
                <div className="flex flex-col items-center space-y-2">
                    {scroll > 0 && (
                        <div
                            className="mt-20 flex flex-col items-center cursor-pointer mb-4 mr-2"
                            onClick={() => handleScrollButtonClick('up')}
                            role="button"
                            tabIndex="0"
                        >
                            <span className="text-gray-500 text-2xl transform">▲</span>
                            <span className="text-gray-400 text-xs mt-1"> Up</span>
                        </div>
                    )}
                    {scroll < sections.length - 1 && (
                        <div
                            className="mt-20 flex flex-col items-center cursor-pointer mr-2"
                            onClick={() => handleScrollButtonClick('down')}
                            role="button"
                            tabIndex="0"
                        >
                            <span className="text-gray-400 text-xs"> Down</span>
                            <span className="rotate-180 text-gray-500 text-2xl transform">▲</span>
                        </div>
                    )}
                </div>
            </div>

            <MobileNav showNav={showNav} setShowNav={setShowNav} />

            <div className="fixed bottom-4 right-4 md:hidden z-50">
                <button
                    onClick={() => setShowNav(!showNav)}
                    className="p-4 bg-purple-700 text-white rounded-full shadow-md"
                >
                    {showNav ? "Close" : "Menu"}
                </button>
            </div>
        </div>
    );
}

export default Header;
