import { useEffect } from "react"
import {slogans} from '../../data/slogans'

export default function Welcome() {
    const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)]

    return (
        <>
            <img src='/logo.png' alt="Logo de la web" width={'200px'}/>
            <div className="text">
                <h1>¡Bienvenidos a MGCODES!</h1>
                <small>{randomSlogan}</small>
            </div>
        </>
    )
}