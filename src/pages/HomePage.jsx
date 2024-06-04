import Header from "../components/Header";
import Footer from '../components/Footer';
import Welcome from '../components/home/Welcome';

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <main>
                <Welcome></Welcome>
            </main>
            <Footer></Footer>
        </>
    )
}