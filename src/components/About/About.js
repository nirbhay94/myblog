import React from 'react';

const About = () => {
    return <div>
    <section className="ftco-section about-section">
        <div className="container">
            <div className="row d-flex" data-scrollax-parent="true">
                <div className="col-md-4 author-img" data-scrollax=" properties: { translateY: '-70%'}" style={{ backgroundImage: 'url("/assets/images/nirbhay-square.webp")', transform: 'translateZ(0px) translateY(63.792%)' }}>
                </div>
                <div className="col-md-2" />
                <div className="col-md-6 wrap ftco-animate fadeInUp ftco-animated">
                    <div className="about-desc">
                        <h1 className="bold-text">About</h1>
                        <div className="p-5">
                            <h2 className="mb-5">Hi! I'm Nirbhay Kularia.</h2>
                            <p>I am self-driven Web Developer and Open Source Contributor with +5
                              years of experience in Web Development. Strong creative and
                              analytical skills. Team player with an eye for detail. Expertise:
        Laravel, Angular, JavaScript, PostgreSQL/MySQL, AWS and Docker.</p>
                            <p><a id="resume" href="/assets/media/Resume.pdf" target="_blank">Check out my resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
}

export default About