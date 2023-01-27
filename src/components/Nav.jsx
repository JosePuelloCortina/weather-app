import React from "react";
import Logo from '../img/Captura.PNG';
import SearchBar from '../components/SearchBar';
import '../styles/Nav.css';
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/'>
                <span className="navbar-brand">
                    <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    Weather App
                </span>
            </Link>
            <Link to='/about'>
                <span>About</span>
            </Link>
            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    )
}