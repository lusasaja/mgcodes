import Logo from './header/Logo'
import Nav from './header/Nav'
import NavIcon from './header/NavIcon'

export default function Header({darkMode, setDarkMode}) {
    return (
        <header>
            <Logo></Logo>
            <Nav></Nav>
            <NavIcon darkMode={darkMode} setDarkMode={setDarkMode}></NavIcon>
        </header>
    )
}