import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../atom/Logo/Logo'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = ({ onClick }) => {
    const [abrir, setAbrir] = useState("false")
    const nav = useRef()
    const burger = useRef()
    const menu = useRef()

    useEffect(() => {
        Close()
    }, [])

    function Close() {
        nav.current.classList.remove('active')
        burger.current.classList.remove('is-expanded')
        menu.current.classList.remove('active')
        setAbrir(abrir)
    }
    function Abrir() {
        menu.current.classList.toggle('active')
        burger.current.classList.toggle('is-expanded')
        nav.current.classList.toggle('active')
    }

    return (
        <>
            <div className={'bg-menu area-menu-mobil'} ref={menu}>
                <div className="md:container m-auto px-15">
                    <div className="flex justify-between items-center area-menu-mobile">
                        <div>
                            <div
                                onClick={Abrir}
                                ref={burger}
                                className='menu-burger '>
                                <div className='bg-white'></div>
                                <div className='bg-white'></div>
                                <div className='bg-white'></div>
                            </div>
                        </div>
                        <div className="logo">
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>

            <nav className='nav' ref={nav}>
                <ul>
                    <li>
                        <AnchorLink href='#form'>
                            <span onClick={Close}>
                                Inscreva-se
                            </span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#case'>
                            <span onClick={Close}>
                                Nossos Cases
                            </span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#resultado'>
                            <span onClick={Close}>
                                Nossos Resultados
                            </span>
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#agencias'>
                            <span onClick={Close}>
                                Nossas Agências
                            </span>
                        </AnchorLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
