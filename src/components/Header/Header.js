import React from 'react';

const Header = () => {
    return <div>
        <header>
            <div className="container" data-section="home">
                <div className="row">
                    <div className="col-md-12">
                        <div className="colorlib-navbar-brand">
                            <a className="colorlib-logo" href="index.html">
                                <span className="logo-img" style={{ backgroundImage: 'url("/assets/images/nirbhay-circle.webp")' }} />Nirbhay Kularia
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
}

export default Header