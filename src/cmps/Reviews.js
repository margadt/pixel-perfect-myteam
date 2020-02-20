import React from 'react';
import hamburger from '../styles/images/bg-pattern-home-4-about-3.svg';
import bottomLogo from '../styles/images/bg-pattern-home-5.svg';
import avatar1 from '../styles/images/avatar-kady.jpg';
import avatar2 from '../styles/images/avatar-aiysha.jpg';
import avatar3 from '../styles/images/avatar-arthur.jpg';

const Reviews = _ => {
    return <section className="reviews">
        <img className="burger" src={hamburger} alt="burger" />
        <div className="container reviews-container">
            <h1>Delivering real results for top companies. Some of our  <span>success stories.</span></h1>
            <div className="cards-container">
                <div className="card">
                    <p> “The team perfectly fit the specialized skill set required.
                        They focused on the most essential features helping us launch the
                platform eight months faster than planned.”</p>
                    <h2>Kady Bake</h2>
                    <p className="profession">Product Manager at Bookmark</p>
                    <img src={avatar1} alt='avatar' />
                </div>
                <div className="card">
                    <p> “We needed to automate our entire onboarding
                        process. The team came in and built out the
                        whole journey. Since going live, user
                retention has gone through the roof!”</p>
                    <h2>Aiysha Reese</h2>
                    <p className="profession">Founder of Manage</p>
                    <img src={avatar2} alt='avatar' />
                </div>
                <div className="card">
                    <p> “Amazing. Our team helped us build an app
                        that delivered a new experience for hiring a
                        physio. The launch was an instant success
                with 100k downloads in the first month.”</p>
                    <h2>Arthur Clarke</h2>
                    <p className="profession">Co-founder of MyPhysio</p>
                    <img src={avatar3} alt='avatar' />
                </div>
            </div>
        </div>
        <img className="bottom-logo" src={bottomLogo} alt="bottom" />
    </section>
}

export default Reviews;
