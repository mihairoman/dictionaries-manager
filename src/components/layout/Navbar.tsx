import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <ul className='left'>
                    <Link to='/'>Home</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;