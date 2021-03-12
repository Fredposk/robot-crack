import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center mt-4 space-y-3'>
                <Link to='/arrays' className='relative w-11/12 shadow-lg'>
                    <img
                        className='rounded-lg '
                        src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80'
                        alt='arrays'
                    />

                    <div className='absolute bottom-0 right-0 mb-3 mr-4 font-mono text-xl font-bold text-white'>
                        Arrays and Strings
                    </div>
                </Link>
                <div className='w-11/12 shadow-xl'>
                    <img
                        className='rounded-lg'
                        src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80'
                        alt='arrays'
                    />
                </div>
                {/* <div className='w-11/12 shadow-lg'>
                    <img
                        className='rounded-lg'
                        src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80'
                        alt='arrays'
                    />
                </div> */}
            </div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
