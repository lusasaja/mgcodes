import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"

export default function Nav() {

    const OutRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleOutClick, true);
    }, [])

    const handleClick = () => {
        const navMenu = document.querySelector('.navMenuContainer')
        navMenu.classList.toggle('active')
    }

    const handleOutClick = (e) => {
        if (!OutRef.current.contains(e.target)) {
            const navMenu = document.querySelector('.navMenuContainer')
            navMenu.classList.remove('active')
        }
    }

    return (
        <nav className="nav">
            <NavLink id="headerNavHome" to="/" className={({ isActive }) => isActive ? 'headerNav reset resalted' : 'headerNav reset'}><i className="bx bx-home-alt"></i>Home</NavLink>
            <NavLink id="headerNavCollection" to="/collection" className={({ isActive }) => isActive ? 'headerNav reset resalted' : 'headerNav reset'}>Colección</NavLink>
            <NavLink to="/extras" className={({ isActive }) => isActive ? 'headerNav reset resalted' : 'headerNav reset'}>Extras</NavLink>
            <NavHashLink to="/#about" className={'headerNav reset'}>Acerca de</NavHashLink>

            <i className="bx bx-menu" id="menuIcon" onClick={handleClick}></i>
            <div className="navMenuContainer" ref={OutRef}>
                <NavLink id="headerNavMenuHome" to="/" className={({ isActive }) => isActive ? 'headerNavMenu reset resalted' : 'headerNavMenu reset'}>Home</NavLink>
                <NavLink id="headerNavMenuCollection" to="/collection" className={({ isActive }) => isActive ? 'headerNavMenu reset resalted' : 'headerNavMenu reset'}>Colección</NavLink>
                <NavLink to="/extras" className={({ isActive }) => isActive ? 'headerNavMenu reset resalted' : 'headerNavMenu reset'}>Extras</NavLink>
                <NavHashLink to="/#about" className={'headerNavMenu reset'}>Acerca de</NavHashLink>
            </div>
        </nav>
    )
}