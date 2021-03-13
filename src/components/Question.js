import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Qfoto from './Qfoto';
import { useState } from 'react';
import Tips from './Tips';
import Questionword from './Questionword';

const Question = () => {
    const [page, setPage] = useState('question');
    console.log(page);

    return (
        <>
            <Nav />
            <div className='flex justify-evenly'>
                <button onClick={() => setPage('tips')}>Tips</button>
                <button onClick={() => setPage('question')}>Question</button>
                <button onClick={() => setPage('code')}>Code</button>
            </div>

            {page === 'code' ? <Qfoto /> : ''}
            {page === 'question' ? <Questionword /> : ''}
            {page === 'tips' ? <Tips /> : ''}

            <div className='fixed inset-x-0 bottom-0'>
                <Footer />
            </div>
        </>
    );
};

export default Question;
