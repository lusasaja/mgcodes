import Info from './Info'
import MiniMenu from './MiniMenu'

export default function Details({setShowInfo}) {
    return (
        <section class="details">
            <Info></Info>
            <MiniMenu setShowInfo={setShowInfo}></MiniMenu>
        </section>
    )
}