import React from 'react';

const Footer = () => {
    return <div>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-5 text-center">
                        <div className="ftco-footer-widget mb-5">
                            <ul className="ftco-footer-social list-unstyled">
                                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.linkedin.com/in/nirbhay-kularia-a095a643" title="LinkedIn"><span className="fa fa-linkedin" /></a></li>
                                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://github.com/nirbhay94" title="Github"><span className="fa fa-github" /></a></li>
                                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.fiverr.com/nirbhaykularia?public_mode=true" title="Fiverr"><span className="fa fa-laptop" /></a></li>
                            </ul>
                        </div>
                        <div className="ftco-footer-widget">
                            <h2 className="mb-3">Contact Me</h2>
                            <p className="h3 email"><a href="mailto: kularianirbhay@gmail.com">kularianirbhay@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright © All rights reserved &nbsp;&nbsp;
    <i className="ion-md-glasses" aria-hidden="true" style={{ color: 'black' }} />
                            &nbsp; Design inspired by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

export default Footer