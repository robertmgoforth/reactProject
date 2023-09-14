import { useState } from 'react';

import './Navbar.css';


export default function NavBar() {


    return(<>
    <div className="navBar">
    <div className="navLogo"></div>
    <div className="navMenu">
        <button>Home</button>
        <button>Games</button>
        <button>Information</button>
    </div>
    </div>
    </>)
}