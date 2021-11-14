import React from 'react';
import Cars from '../../Shared/Cars/Cars';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Navigation></Navigation>
            </div>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Footer></Footer>
        </div >
    );
};

export default Home;