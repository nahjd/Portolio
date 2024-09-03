import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 py-16">
            <div className="z-20 flex items-center justify-center gap-6 flex-wrap max-w-6xl">
                <ProjectCard
                    name={"GYM Website"}
                    image={"/images/pro1.png"}
                    about={
                        "It is built on React, is backend using mongodb. And it is also mobile responsive and use FireBase google when logging in"
                    }
                    demo={"https://gymnako.vercel.app/"}
                    code={"https://github.com/nahjd/GYM.git"}
                />
                <ProjectCard
                    name={"Social Media Website"}
                    image={"/images/pro2.png"}
                    about={
                        "It is built on React+TypeScript, backend using MONGODB, Express JS. It is also mobile responsive and not fully finished 😉"
                    }
                    demo={"https://social-sebeke-nako.vercel.app"}
                    code={""}
                />

            </div>
        </div>
    );
}

export default Project;
