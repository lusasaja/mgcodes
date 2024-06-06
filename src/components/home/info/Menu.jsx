import { useEffect } from "react";

export default function Menu({active, setActive, setShowInfo, showInfo}) {
    const handleActive = (section) => {
        setActive(section);
        setShowInfo(section);
    }

    useEffect(() => {
        if (showInfo) {
            setActive(showInfo)
        }
    }, [showInfo])

    return(
        <section className="menu">
            <button className={'menuItem' + (active === 'about' ? ' active' : '')} onClick={() => {handleActive('about')}}>Acerca de</button>
            <button className={'menuItem' + (active === 'content' ? ' active' : '')} onClick={() => {handleActive('content')}}>Contenido</button>
            <button className={'menuItem' + (active === 'contribute' ? ' active' : '')} onClick={() => {handleActive('contribute')}}>Contribuir</button>
            <button className={'menuItem' + (active === 'contact' ? ' active' : '')} onClick={() => {handleActive('contact')}}>Contacto</button>
        </section>
    )
}