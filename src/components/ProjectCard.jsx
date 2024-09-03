import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Tilt from "react-parallax-tilt";

function ProjectCard({ name, about, image, demo, code, note }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="text-gray-200 body-font rounded-lg">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded cursor-pointer"
                        alt="project"
                        src={image}
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        {name}
                    </h1>
                    <p className="mb-8 leading-relaxed lg:pr-28">{about}</p>
                    {note && (
                        <p className="mb-5 leading-relaxed lg:pr-28 text-red-700 text-sm font-medium">
                            {note}
                            <a
                                href="https://fash-cave.onrender.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-1 text-white relative before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:-skew-y-3 transition-all before:duration-300 after:absolute after:left-0 after:top-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-300 after:skew-y-3"
                            >
                                click here
                            </a>
                        </p>
                    )}
                    <div className="flex justify-center">
                        {demo && (
                            <a href={demo} target="_blank" rel="noreferrer">
                                <button className="inline-flex text-white bg-purple-700 border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-purple-500  rounded text-lg">
                                    Demo <BiLinkExternal />
                                </button>
                            </a>
                        )}
                        <a href={code} target="_blank" rel="noreferrer">
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-5 focus:outline-none font-medium items-center justify-center gap-1 hover:bg-gray-200 rounded text-lg">
                                Code <BsGithub />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            className="object-cover object-center rounded"
                            alt="project"
                            src={image}
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
                            onClick={() => setIsModalOpen(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectCard;
