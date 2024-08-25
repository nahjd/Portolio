import React, { useEffect } from "react";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoMdContact } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';

function MobileNav({ showNav, setShowNav }) {
    useEffect(() => {

        document.body.style.overflow = showNav ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showNav]);

    return (
        <div
            className={
                showNav
                    ? "fixed h-50 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md  border-t-0 border-purple-700 z-50 transition-all duration-[500ms] overflow-hidden"
                    : "fixed h-0 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md  z-50 transition-all duration-[500ms] overflow-hidden"
            }
        >
            <div className="block items-center justify-center text-white">
                <ul className="flex gap-5 flex-col mt-2">
                    <li className="relative group">
                        <ScrollLink
                            to="hero"
                            smooth={true}
                            duration={500}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
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
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
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
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
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
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
                        >
                            <IoMdContact fontSize={20} />
                            <span>Contact</span>
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;
