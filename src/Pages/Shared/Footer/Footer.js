import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-white text-center text-lg-start mt-5">

                <div class="container p-4">
                    <div class="row">

                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase text-primary fw-bold">CAR HOUSE</h5>

                            <p id='contact'>
                                <p> Best Dealer In Sylhet</p><br />
                                <p>
                                    106-109 Rose View Complex (Ground Floor), <br />Shahjalal Upashahar Main Rd, Sylhet 3100
                                    <br />Email : hi@carhouse.com
                                    <br />Phone : 01742824576
                                </p>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">


                            <div class="d-flex flex-column">

                                <Link to="/underconstruction" class=" my-1 text-white text-decoration-none">About Us</Link>

                                <Link to="/underconstruction" class=" my-1 text-white text-decoration-none">Community Blog</Link>

                                <Link to="/underconstruction" class=" my-1 text-white text-decoration-none">Rewards</Link>

                                <Link to="/underconstruction" class=" my-1 text-white text-decoration-none">Meet the Team</Link>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div class="d-flex flex-column">

                                <Link to="/underconstruction" class="my-1 text-white text-decoration-none ">Our Blogs</Link>


                                <Link to="/underconstruction" class="my-1 text-white text-decoration-none">Terms</Link>


                                <Link to="/underconstruction" class="my-1 text-white text-decoration-none">FAq</Link>


                                <Link to="/underconstruction" class="my-1 text-white text-decoration-none">Gallery</Link>

                            </div>
                        </div>

                    </div>

                </div>
                <div class="text-center p-3 fw-bold" >
                    © 2021 Copyright: CAR HOUSE
                </div>
            </footer>
        </div>
    );
};

export default Footer;