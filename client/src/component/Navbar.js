import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
    
    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'><NavLink to="/"><h2 id='x'>Home</h2></NavLink></div>
                <div className='nav-links'>
                    <ul>
                        <li><NavLink to="/latest">Latest</NavLink></li>
                        <li><NavLink to="/popular">Popular</NavLink></li>
                        <li><NavLink to="/favourite">Favourite</NavLink></li>
                        <li><NavLink to="/register">SignUp</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
