import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark px-3">
                <div className="navbar-brand">
                    Generalle
                </div>
                <div className="nav-menu d-flex gap-2">
                    <NavLink to="/" className="nav-link btn btn-outline-light">
                        Home
                    </NavLink>
                    <NavLink to="/gallery" className="nav-link btn btn-outline-light">
                        Gallery
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
