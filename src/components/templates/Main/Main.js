import Accordion from '../../molecules/Accordion/Accordion'
import Agencia from '../../molecules/Agencia/Agencia'
import Cases from '../../molecules/Cases/Cases'
import Footer from '../../molecules/Footer/Footer'
import Graficos from '../../molecules/Graficos/Graficos'
import Register from '../../molecules/Register/Register'
import Home from '../../organisms/Home/Home'

export default function Main() {
    return (
        <>
            <Home />
            <Agencia />
            <Graficos />
            <Accordion/>
            <Register />
            <Cases/>
            <Footer />
        </>
    )
}
