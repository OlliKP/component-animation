import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false); // State to control animation

    // Add animation effect when component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`about-page-container container-fluid d-flex flex-column justify-content-center align-items-center gap-3 ${isVisible ? 'animate-about' : ''}`}>
            <div className='box-shadow container bg-white p-4 m-5'>
                <div className='row'>
                    <h1 className={`text-center px-2 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.1s' }}>This app was <br />built with React</h1>
                    <hr />
                    <p className={`px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.2s' }}>My goal for this prototype was to explore the possibilities for animation between components, to create seamless transitions between pages</p>
                    <p className={`px-lg-5 font-italic ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.3s' }}><strong>The built-in React Hooks were essential to make this work.</strong></p>
                </div>
                <div className='react-hooks row text-center pt-2 m-0'>
                    <div className='col-6'>
                        <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.4s' }}><strong>useState</strong></p>
                        <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.5s' }}><strong>useEffect</strong></p>
                    </div>
                    <div className='col-6'>
                        <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.6s' }}><strong>useContext</strong></p>
                        <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.7s' }}><strong>useRef</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
