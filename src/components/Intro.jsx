// create thsi page to show the intro of the quiz

// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ss-logo.png';
// import './Intro.css'

function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-left">
            {/* Logo or hero image */}
            <img src={logo} alt="Logo" className="intro-logo" />
            </div>
            <div className="intro-right">
                <h1>Welcome to the Math Quiz!</h1>
                {/* <p>Test your math knowledge with fun and challenging questions.</p> */}
                {/* <p>Ready to test your math skills? Don't worry, we promise not to ask you to solve for "X" in your free time! Get ready for some mathematical adventures!</p> */}
                <p>Ready to test your math skills?  Don&rsquo;t worry, we promise not to ask you to solve for &ldquo;X&rdquo; in your free time! Get ready for some mathematical adventures!</p>

                {/* <button className="start-button">Start Quiz</button> */}
                <Link to="/quiz" className="start-button">Start Quiz</Link>
            </div>
            
        </div>
    );
}
export default Intro;










