import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <Nav />

            <div className='flex justify-center py-2 bg-red-700'>
                <img
                    className=''
                    src='https://i.ibb.co/XxcKZJP/Screenshot-2021-03-13-at-01-03-02.png'
                    alt='Code'
                />
            </div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </>
    );
};

export default About;
