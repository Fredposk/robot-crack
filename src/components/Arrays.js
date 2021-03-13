import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Arrays = () => {
    return (
        <div>
            <Nav />
            <div>
                <div className='space-y-3'>
                    <Link to='/questions/:id' className='flex bg-blue-400'>
                        <img
                            className='object-cover w-20 h-20 rounded-full'
                            src='https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
                            alt='number1'
                        />
                        <div className='flex items-start justify-between space-x-3'>
                            <div> THIS IS THE FIRST QUESTION </div>
                            <svg
                                className='w-4 h-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z' />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default Arrays;
