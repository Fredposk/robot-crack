import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className='w-4/5 mt-2 shadow-lg'>
                <img
                    className='rounded-lg'
                    src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80'
                    alt='arrays'
                />
            </div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
