import React from "react";
import {Link, NavLink } from 'react-router-dom';
const Header = (props) => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">AwesomeApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to={"/home"} className="nav-link" activeClassName={"active"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to={"/user/15"} className={"nav-link"}>User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}

export default Header;

