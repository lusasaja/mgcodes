import Header from "../components/Header";
import Footer from '../components/Footer';
import Welcome from '../components/home/Welcome';
import Info from "../components/home/Info";
import Server from "../components/home/Server";
import '../index.css'
import { useEffect, useState } from "react";

export default function HomePage({darkMode, setDarkMode}) {
    /* Menu */
    const [active, setActive] = useState('about');
    const [showInfo, setShowInfo] = useState('about');

    return (
        <div className={`bigContainer ${darkMode ? 'dark' : ''}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
            <main of='home'>
                <Welcome></Welcome>
                <Info active={active} setActive={setActive} showInfo={showInfo} setShowInfo={setShowInfo}></Info>
                <Server></Server>
            </main>
            <Footer setShowInfo={setShowInfo}></Footer>
        </div>
    )
}