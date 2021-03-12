import Coffee from '../icons/Coffee';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Robot from '../icons/Robot';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <div className='flex items-center justify-between bg-gray-200 border-b-2 border-gray-800'>
                <Link to={'/'} className='flex items-center m-2'>
                    <div className='w-8 h-8 '>
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
        </div>
    );
};

export default Nav;
