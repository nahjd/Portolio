import React from "react";
import Type from "./Type";

function Hero() {
    return (
        <div className="h-screen flex items-center justify-center flex-col lg:flex-row  from-blue-500 to-purple-500">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center">
                <h3 className="text-white text-4xl lg:text-5xl mb-4 flex items-center justify-center gap-2">
                    Hi There!
                    <img
                        src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif"
                        alt="hand"
                        className="h-10"
                    />
                </h3>
                <span className="text-white text-4xl lg:text-5xl font-bold mb-4">
                    I'M <span className="text-[#ad50eb]">Nahid Memmedov</span>
                </span>
                <span className="text-[#ad50eb] text-2xl lg:text-3xl font-semibold bg-gray-800 h-20 lg:h-32 w-72 lg:w-80 flex items-center justify-center px-5 rounded-md shadow-xl capitalize">
                    <Type />
                </span>
            </div>
        </div>
    );
}

export default Hero;
