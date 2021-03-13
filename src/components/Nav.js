import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Robot from '../icons/Robot';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='relative'>
            <div className='flex flex-row items-center justify-between bg-gray-200 border-b border-gray-800 '>
                <Link to={'/'} className='flex items-center m-2'>
                    <div className='relative w-8 h-8'>
                        <Robot />
                    </div>
                    <div className='ml-2 font-mono text-sm font-bold text-gray-800'>
                        Robot Crack
                    </div>
                </Link>
                <div className=''>
                    <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            {isOpen && (
                <div className='absolute z-20 w-full bg-gray-400 '>
                    <Link className='' to={'/favorites'}>
                        <div className='py-2 border-b border-black'>
                            {' '}
                            Favorites
                        </div>
                    </Link>
                    <Link className='' to={'/search'}>
                        <div className='py-2 border-b border-black'>
                            {' '}
                            Search
                        </div>
                    </Link>
                    <Link className='' to={'/about'}>
                        <div className='py-2 border-b border-black'> about</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Nav;
