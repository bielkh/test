import React from 'react'

import { Link } from "react-router-dom";

import user from "../img/user.png";

import "./Navbar.css";

import Cafe from '../img/home/cafe.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            
            <Link to={`/`}>CoffeeVerse</Link>   
        <img src={Cafe} className='cafe'></img>
        </h2>

     
        <ul>
            <li><Link to={`/`}>Home</Link>
            </li>
            <li>
                    <Link to={`/menu`}>Cardápio</Link>
            </li>
                <li>
                <Link to={`/QuemSomos`}>Quem Somos</Link>
                </li>
                <li>
                <Link to={`/new`} className="new-btn">
                    Notícias
                </Link>
                </li>
                <li>
                  <Link to={`/criar`}>Novo Post</Link>
                </li>
                <li>
                  <Link to={`/login`}><img src={user}></img></Link>
                </li>
                
                

        </ul>
    </nav>
  )
}

export default Navbar