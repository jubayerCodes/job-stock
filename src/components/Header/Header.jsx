import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-logo-area">
                    <Link to="/">
                        <h2 className="header-logo">
                            Job Stock
                        </h2>
                    </Link>
                    <div className="offcanvas md:hidden" onClick={() => setOpen(!isOpen)}>
                        {
                            isOpen ?
                                <FontAwesomeIcon icon={faXmark} />
                                :
                                <FontAwesomeIcon icon={faBars} />
                        }
                    </div>
                </div>
                <div className="header-nav-area">
                    <nav className='header-nav hidden'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/applied">applied jobs</ActiveLink>
                        <ActiveLink to="/blog">blog</ActiveLink>
                    </nav>
                    <nav className={`offcanvas-nav ${isOpen ? 'top-0' : '-top-72'}`}>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/applied">applied jobs</ActiveLink>
                        <ActiveLink to="/blog">blog</ActiveLink>
                    </nav>
                </div>
                <div className="header-btn-area">
                    <Link to="/"><button className="header-btn">Start Applying</button></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;