import React from "react";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiFillStar,
} from "react-icons/ai";
import { FiUser, FiFileText } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";

import { Link } from "react-router-dom";
import { IoMdContact } from 'react-icons/io';

function MobileNav({ showNav, setShowNav }) {
    return (
        <div
            className={
                showNav
                    ? "fixed h-60 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 z-50 transition-all duration-[500ms] overflow-hidden"
                    : "fixed h-0 bg-gradient-to-r from-purple-900 to-violet-900  w-full top-[68px] left-0 rounded-b-md  z-50 transition-all duration-[500ms] overflow-hidden"
            }
        >
            <div className=" block items-center justify-center text-white">
                <ul className="flex gap-8 flex-col mt-10  ">
                    <li className="relative group">
                        <Link
                            to={"/"}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
                        >
                            <AiOutlineHome fontSize={20} />
                            <span className="">Home</span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link
                            to={"/about"}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
                        >
                            <FiUser fontSize={20} />
                            <span className="">About</span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link
                            to={"/projects"}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
                        >
                            <AiOutlineFundProjectionScreen fontSize={20} />
                            <span className="">Projects</span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link
                            to={"/"}
                            className="flex gap-1 items-center justify-center cursor-pointer text-base font-bold relative"
                            onClick={() => setShowNav(false)}
                        >
                            <IoMdContact fontSize={20} />
                            <span className="">Contact</span>
                        </Link>
                    </li>
                </ul>


            </div>
        </div>
    );
}

export default MobileNav;
