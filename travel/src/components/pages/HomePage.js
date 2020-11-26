import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
}

export default HomePage;