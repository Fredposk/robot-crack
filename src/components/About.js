import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <Nav />

            <div>About page</div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default About;
