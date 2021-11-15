import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <div style={{ backgroundColor: "black", color: "white" }}>
                <Navigation></Navigation>
            </div>
            <img src="https://i.ibb.co/19kXwTW/3819740.jpg" className='w-100' alt="" />
            <Footer></Footer>
        </div>
    );
};

export default NotFound;