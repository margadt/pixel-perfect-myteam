import React from 'react';
import rightCornerImg from '../styles/images/bg-pattern-home-2.svg';

const FirstView = _ => {
    return <section className="first-view-container">
        <div className="container">
            <div style={{ height: 200 }} className="flex space-between">
                <h1>Find the best <span>talent</span></h1>
                <div className="flex column space-between">
                    <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="4" fill="#79C8C7" />
                    </svg>

                    <p>Finding the right people and building high performing teams can be hard.
                        Most companies aren’t tapping into the abundance of global talent.
                We’re about to change that.</p>
                </div>
            </div>
            <img src={rightCornerImg} alt="bgi" />
        </div>
    </section>
}

export default FirstView;

