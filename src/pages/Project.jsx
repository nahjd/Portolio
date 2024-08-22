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
                {/* <ProjectCard
                    name={"Imagzen 🖼️"}
                    image={"/project/img2.png"}
                    about={
                        "Meet IMAGZEN – the responsive image download app that lets you search and download images with ease."
                    }
                    demo={"https://imagzen.vercel.app/"}
                    code={"https://github.com/riteshk-007/imagzen"}
                /> */}
                {/* <ProjectCard
                    name={"NextJs E commerce 🏪"}
                    image={"/project/img3.png"}
                    about={
                        "You can order clothes and create your own products and it is built on NextJS, its backend uses MongoDB. And it is also mobile responsive. And Test Account is = test@gmail.com and password = test4321"
                    }
                    demo={"https://nextjs-e-commerce-rk.vercel.app/"}
                    code={"https://github.com/riteshk-007/nextjs-store"}
                /> */}
                {/* <ProjectCard
                    name={"ChatGPT Clone 💬"}
                    image={"/project/img4.png"}
                    about={
                        "Similar to chatGPT, this platform is designed to assist users in addressing their queries. It's an excellent resource to tackle any code-related issue or inquiry you may have."
                    }
                    code={"https://github.com/riteshk-007/Chat-GPT-Clone"}
                /> */}
                {/* <ProjectCard
                    name={"Fitness Club 👊"}
                    image={"/project/img5.png"}
                    about={
                        "We're excited to introduce Gym-Exercise, the fitness platform that's open-source and designed to help you take charge of your health and fitness journey."
                    }
                    demo={"https://gym-exercise-six.vercel.app/"}
                    code={"https://github.com/riteshk-007/gym-exercise"}
                /> */}
                {/* <ProjectCard
                    name={"Youtube Clone 📹"}
                    image={"/project/img6.png"}
                    about={
                        "A YouTube clone that allows users to search and enjoy their favorite videos and songs is now available. This platform is also mobile-responsive, making it convenient for users on-the-go."
                    }
                    demo={"https://youtube-clone-by-ritesh.netlify.app/"}
                    code={"https://github.com/riteshk-007/Youtube-Clone-by-Tailwind-Css"}
                /> */}
            </div>
        </div>
    );
}

export default Project;
