import React, { useEffect, useState, useContext } from 'react';
import './About.css';
import '../../Animations.css';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../ThemeContext';

const About = () => {
    const [isVisible, setIsVisible] = useState(false); // State to control animation
    const location = useLocation();
    const comingFromLeft = ['/', '/products'];
    const theme = useContext(ThemeContext);

    // Add animation effect when component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`about-page-container container-fluid d-flex flex-column justify-content-center align-items-center gap-3`}>
            {isVisible && (
                <div className={`container box-shadow container bg-white p-4 m-5 ${
                    !comingFromLeft.includes(location.state?.prevLocation)
                        ? 'slideFromLeft'
                        : 'slideFromRight'
                }`}>
                    <div className='row'>
                        <h1 style={{ color: theme.themeColor }} className="text-center px-2">This app was <br />built with React</h1>
                        <hr />
                        <p className="px-lg-5">My goal for this prototype was to explore the possibilities for animation between components, to create seamless transitions between pages</p>
                        <p className="px-lg-5 font-italic"><strong>The built-in React Hooks were essential to make this work.</strong></p>
                    </div>
                    <div className='react-hooks row text-center pt-2 m-0'>
                        <div className='col-6'>
                            <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.3s' }}><strong>useState</strong></p>
                            <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.4s' }}><strong>useEffect</strong></p>
                        </div>
                        <div className='col-6'>
                            <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.5s' }}><strong>useContext</strong></p>
                            <p className={`hooks-text px-lg-5 ${isVisible ? 'animate-about' : ''}`} style={{ animationDelay: '0.6s' }}><strong>useRef</strong></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
