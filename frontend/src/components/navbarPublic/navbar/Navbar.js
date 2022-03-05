
import React, {useState, useLayoutEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import {navbar_items} from './Data'

function Navbar()
{
    const [s, setS]= useState(false)
    const display_navbar_items = _ =>
    {
        let items = navbar_items.map(item =>
        {
            return (
                <li className = "nav-item me-lg-3 my-lg-0 my-2" key = {Math.random()}>
                    <NavLink className = "nav-link text-capitalize position-relative hover" to = {`/${item.name === '' ? '': item.name}`}><i className = {`${item.icon} me-2`}></i>{item.name === '' ? 'home': item.name}</NavLink>
                </li>
            )
        })
        return items
    }

    const add_shadow = _ =>
    {
        (window.scrollY >= 80) ? setS(true): setS(false) 
    }

    useLayoutEffect(()=>{
        window.addEventListener('scroll', event =>
        {
            add_shadow()
        })

        document.addEventListener('DOMContentLoaded', event =>
        {
            add_shadow()
        })
    })
    

	
		return (
            <nav className = {`navbar navbar-expand-lg navbar-light text-dark fixed-top ${s ? "shadow-lg": "shadow"}`}>
                <div className = 'container py-2'>
                    <Link className ="navbar-brand" to="/"><i className="far fa-car-building me-2"></i><span>T</span>ashilat<span>A</span>pplication</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className ="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">    
                        <ul className ="navbar-nav">
                            {display_navbar_items()}
                        </ul>
                    </div>
                </div>
            </nav>
	   )
	
}

export default Navbar