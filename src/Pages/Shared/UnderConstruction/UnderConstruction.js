import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const UnderConstruction = () => {
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Navigation></Navigation>
            </div>
            <img src='https://i.ibb.co/Nrf5M8r/2451223.png' className='w-100' alt="" />
            <Footer></Footer>
        </div>
    );
};

export default UnderConstruction;