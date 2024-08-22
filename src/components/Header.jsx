import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import { IoMdContact } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);
    const [scroll, setScrolled] = useState(false);
    const name = ["NAKO"];
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className={
                scroll
                    ? " flex items-center justify-between px-4 z-50 bg-purple-950 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg shadow-lg relative lg:sticky top-0"
                    : "flex items-center justify-between px-4 z-50  relative lg:sticky top-0"
            }
        >
            <span className="capitalize md:w-1/3 lg:w-1/2 flex items-center justify-center py-5 px-2 relative cursor-pointer">
                <h1
                    className="cursor-pointer text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-50 to-blue-100 bg-clip-text text-transparent uppercase"
                    onClick={() => navigate("/")}
                >
                    {name}
                </h1>
            </span>
            <div className="w-2/3 hidden lg:flex items-center justify-start text-white">
                <ul className="flex gap-8 lg:gap-12">
                    <li className="relative group">
                        <ScrollLink
                            to="hero"
                            smooth={true}
                            duration={500}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
                        >
                            <AiOutlineHome fontSize={20} />
                            <span>Home</span>
                        </ScrollLink>
                    </li>
                    <li className="relative group">
                        <ScrollLink
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
                        >
                            <FiUser fontSize={20} />
                            <span>Skills</span>
                        </ScrollLink>
                    </li>
                    <li className="relative group">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
                        >
                            <AiOutlineFundProjectionScreen fontSize={20} />
                            <span>Projects</span>
                        </ScrollLink>
                    </li>
                    <li className="relative group">
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full"
                        >
                            <IoMdContact fontSize={20} />
                            <span>Contact</span>
                        </ScrollLink>
                    </li>
                </ul>
            </div>
            <span>
                <div className="h-full lg:hidden flex items-center justify-center cursor-pointer relative">
                    {showNav ? (
                        <MdClose
                            fontSize={25}
                            className="text-white"
                            onClick={() => setShowNav(!showNav)}
                        />
                    ) : (
                        <RiMenu3Fill
                            fontSize={25}
                            className="text-white"
                            onClick={() => setShowNav(!showNav)}
                        />
                    )}
                    <MobileNav showNav={showNav} setShowNav={setShowNav} />
                </div>
            </span>
        </div>
    );
}

export default Header;
