import React from "react";
import Type from "./Type";

function Hero() {
    return (
        <div className="h-screen flex items-center justify-center flex-col lg:flex-row  overflow-hidden">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center">
                <h3 className="text-white text-2xl lg:text-4xl mb-2 flex items-center justify-center gap-2">
                    Hii I'M
                    <img
                        style={{ width: "50px", height: "50px", marginTop: "15px" }}
                        src="https://media.tenor.com/QpTLQALtdskAAAAi/hii-wave.gif"
                        alt="hii"
                        className="h-10"
                    />
                </h3>
                <span className="text-white text-3xl lg:text-5xl font-bold mb-4">
                    <span className="text-[#ad50eb]">Nahid Memmedov</span>
                </span>
                <span className="text-[#ad50eb] text-2xl lg:text-3xl font-semibold h-20 lg:h-32 w-72 lg:w-80 flex items-center justify-center px-5   capitalize">
                    <Type />
                </span>
            </div>
        </div>
    );
}

export default Hero;
