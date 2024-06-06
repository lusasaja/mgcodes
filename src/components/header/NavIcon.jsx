export default function NavIcon({darkMode, setDarkMode}) {
    return (
        <section className="navIcon">
            <a href="https://github.com/Lusasaja23/mgcodes" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
            <i className={`bx bx-${darkMode ? 'moon' : 'sun'}`} onClick={() => { darkMode ? setDarkMode(false) : setDarkMode(true) }}></i>
            <i className="bx bx-cog"></i>
        </section>
    )
}