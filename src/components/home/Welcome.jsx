import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {slogans} from '../../data/slogans'
import {prizes} from '../../data/prizes'

export default function Welcome() {
    const [randomSlogan, setRandomSlogan] = useState(slogans[Math.floor(Math.random() * slogans.length)])

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomSlogan(slogans[Math.floor(Math.random() * slogans.length)])
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="welcome" id="welcome">
            <img src='/logo.png' alt="Logo de la web" width={'200px'}/>
            <section className="text">
                <h1>¡Bienvenidos a MGCODES!</h1>
                <small>{randomSlogan}</small>
                <NavLink className='reset link' to={'/collection'}>Ver la Colección</NavLink>
            </section>
        </section>
    )
}