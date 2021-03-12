import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-around py-1 font-light text-gray-400 bg-black'>
            <button
                onClick={() =>
                    window.open(
                        'https://www.linkedin.com/in/frederico-ponki-k%C3%BCckelhaus/',
                        '_blank'
                    )
                }
                rel='noopener noreferrer'
                className='cursor-pointer'
            >
                LinkedIn
            </button>
            <div className='cursor-pointer '>More</div>{' '}
            <button
                onClick={() =>
                    window.open('https://github.com/Fredposk', '_blank')
                }
                rel='noopener noreferrer'
            >
                <svg
                    className='w-5 h-5 ml-2 cursor-pointer'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 480 512'
                >
                    <path
                        fill='currentColor'
                        d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z'
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default Footer;
