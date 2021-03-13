import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Favorites = () => {
    return (
        <div>
            <Nav />

            <div>Favorites</div>
            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default Favorites;
