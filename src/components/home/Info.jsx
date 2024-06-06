import Menu from "./info/Menu"
import Content from "./info/Content"

export default function Info({active, setActive, showInfo, setShowInfo}) {
    return (
        <section className="info" id="info">
            <Menu active={active} setActive={setActive} showInfo={showInfo} setShowInfo={setShowInfo}></Menu>
            <Content showInfo={showInfo}></Content>
        </section>
    )
}