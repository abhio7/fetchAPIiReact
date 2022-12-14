import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Users <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="products">Products</a>
                    <a className="nav-item nav-link" href="orders">Orders</a>
                </div>
            </div>
        </nav>
    </>)

}

export default NavBar;