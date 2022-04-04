import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'
const Header = () => {

    return (
        <header>
            <div className='link'>
                
                <Link to='/home'>Home</Link>{'     '}
                <Link to='/reviews'>Reviews</Link>{'   '}
                <Link to='/dashboard'>Dashboard</Link>{' '}
                <Link to='/blogs'>Blogs</Link>{' '}
            
            </div>

        </header>
    );
};


export default Header;