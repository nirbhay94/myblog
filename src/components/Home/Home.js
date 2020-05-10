import React from 'react';
import './Home.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <ProgressBar />
            <div className="page">
                <div id="colorlib-page">
                    <Header />
                    <Slider />
                    <About />
                    <Portfolio />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
