import Coffee from '../icons/Coffee';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <div className='flex justify-between bg-gray-200 border-b-2 border-gray-800 item-center'>
                <div className='flex items-end m-2'>
                    <div className='w-8 h-8 '>
                        <Coffee />
                    </div>
                    <div className='ml-2 font-mono text-sm font-bold text-gray-800'>
                        Coffee Time Crack
                    </div>
                </div>
                <div className=''>
                    <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
