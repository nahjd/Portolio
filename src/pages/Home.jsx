import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import "./Home.scss";
import Project from '../pages/Project';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact'

const Home = () => {

    useEffect(() => {
        const createStars = (count) => {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = `${Math.random() * 100}vh`;
                star.style.left = `${Math.random() * 100}vw`;
                star.style.width = `${Math.random() * 3}px`;
                star.style.height = star.style.width;
                star.style.animationDuration = `${Math.random() * 5 + 5}s`;
                star.style.animationDelay = `${Math.random() * 10}s`;
                starsContainer.appendChild(star);
            }
        };
        createStars(800);
    }, []);


    return (
        <div id='stars'>
            <section id="hero">
                <Hero />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
