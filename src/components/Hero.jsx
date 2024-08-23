import React from "react";
import Type from "./Type";

function Hero() {
    return (
        <div className="h-screen flex items-center justify-center flex-col lg:flex-row  overflow-hidden">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center">
                <h3 className="text-white text-xl lg:text-2xl mb-0 flex items-center justify-center gap-0">
                    Hii I'M
                    <img
                        style={{ width: "60px", height: "60px" }}
                        src="https://media.tenor.com/QpTLQALtdskAAAAi/hii-wave.gif"
                        alt="hii"
                        className="h-10"
                    />
                </h3>
                <span className="text-white text-2xl lg:text-5xl font-bold mb-4">
                    <span className="text-[#ad50eb]">Nahid Memmedov</span>
                </span>
                <span className="text-[#E94F4F] text-xl lg:text-2xl font-semibold h-10 lg:h-22 w-72 lg:w-80 flex items-center justify-center px-5  capitalize ">
                    <Type />
                </span>
            </div>
        </div>
    );
}

export default Hero;
