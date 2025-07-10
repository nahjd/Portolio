import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Project() {
    const [modalImage, setModalImage] = useState(null);

    const handleOpenModal = (image) => {
        setModalImage(image);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    return (
        <div className="min-h-screen bg-gray-900 py-16">
            {/* Single Project Card outside of Swiper */}

            <div className="z-20 flex items-center justify-center gap-6 flex-wrap max-w-6xl">
                {/* Add a sample project card or remove if not needed */}
            </div>

            {/* Swiper Container */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                className="max-w-6xl mx-auto"
                style={{ padding: "20px", height: "100%", width: "100%" }}
            >


                <SwiperSlide>
                    <ProjectCard
                        name={"Social Media Website"}
                        image={"/images/pro3.png"}
                        about={
                            "Login to social media website...ℳ"
                        }
                        demo={"https://social-sebeke-nako.vercel.app"}
                        code={"https://github.com/nahjd/social-front.git"}
                        onImageClick={() => handleOpenModal("/images/pro3.png")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard
                        name={"Social Media Website"}
                        image={"/images/pro2.png"}
                        about={
                            "It is built on React+TypeScript, backend using MONGODB, Express JS. It is also mobile responsive and not fully finished 🌞"
                        }
                        demo={"https://social-sebeke-nako.vercel.app"}
                        code={"https://github.com/nahjd/social-front.git"}
                        onImageClick={() => handleOpenModal("/images/pro2.png")}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectCard
                        name={"Social Media Website"}
                        image={"/images/pro4.png"}
                        about={
                            "Dark Mode to social media website...🌛 BackEnd code ↙️"
                        }
                        demo={"https://social-sebeke-nako.vercel.app"}
                        code={"https://github.com/nahjd/social-back.git"}
                        onImageClick={() => handleOpenModal("/images/pro4.png")}
                    />
                </SwiperSlide>


            </Swiper>

            {/* GYM */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                className="max-w-6xl mx-auto"
                style={{ padding: "20px", height: "100%", width: "100%" }}
            >
                <SwiperSlide>
                    <ProjectCard
                        name={"GYM Website"}
                        image={"/images/gym1.png"}
                        about={
                            "It is built on React, is backend using mongodb. And it is also mobile responsive and use FireBase google when logging in"
                        }
                        demo={"https://gymnako.vercel.app/"}
                        code={"https://github.com/nahjd/GYM.git"}
                        onImageClick={() => handleOpenModal("/images/gym1.png")}
                    />
                </SwiperSlide>


                <SwiperSlide>
                    <ProjectCard
                        name={"GYM Website"}
                        image={"/images/pro1.png"}
                        about={
                            "It is the home page. When you click on the selected places in the Navbar, it scrolls down and somewhere you enter the Admin login section, it asks for a password and code."
                        }
                        demo={"https://gymnako.vercel.app/"}
                        code={"https://github.com/nahjd/GYM.git"}
                        onImageClick={() => handleOpenModal("/images/pro1.png")}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectCard
                        name={"GYM Website"}
                        image={"/images/gym2.png"}
                        about={
                            "Cards from the database have a basket, wishlist, and details. Basket also works with check out <stripe> 🎴"
                        }
                        demo={"https://gymnako.vercel.app/"}
                        code={"https://github.com/nahjd/GYM.git"}
                        onImageClick={() => handleOpenModal("/images/gym2.png")}
                    />
                </SwiperSlide>



            </Swiper>
            {/* Fullscreen Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            className="object-cover object-center rounded"
                            alt="project"
                            src={modalImage}
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
                            onClick={handleCloseModal}
                        >
                            X
                        </button>
                    </div>

                    <div
                        className="absolute inset-0"
                        onClick={handleCloseModal}
                        style={{ pointerEvents: 'auto' }}
                    />
                </div>
            )}
        </div>
    );
}

export default Project;
