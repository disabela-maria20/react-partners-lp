import Menu from '../../molecules/Menu/Menu'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React, { useState } from 'react'
import dynamic from "next/dynamic"
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const Home = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="relative">
            <div className="absolute md:relative bg-Blue-900 top-0 right-0 w-full  z-40">
                <Menu />
            </div>
            <div className="relative">
                <img src="/img/header_new_mob.webp" alt="Darlan Romani" width="375" height="901" className="w-full h-screen md:h-auto md:hidden object-top object-cover" />
                <img src="/img/header_new.webp" alt="Darlan Romani" width="1909" height="1071" className="w-full object-top object-cover hidden md:block" />
                <div className="absolute w-full top-27 md:top-1/4">
                    <div className="md:container m-auto px-15">
                        <div className="relative sm:flex sm:justify-center flex-col mt-44 md:mt-26">
                            <h1 className="text-white text-left w-full lg:w-1/2 leading-title block sm:inline pb-38 lg:pb-45 2xl:pb-79">
                                <strong className="text-38 font-bold sm:text-45 2xl:text-66">
                                    Estamos construindo o maior ecossistema de agências do Brasil.
                                </strong>
                            </h1>
                            <p className="font-light text-white text-22 md:text-18 2xl:text-22 text-left leading-paragraph w-full lg:w-1/3">Assista nosso vídeo e conheça mais sobre o Programa que está transformando o mercado publicitário do país.<br /><br /><strong className="font-bold">Quer entender mais sobre como a Adventures Partners funciona?</strong></p>
                        </div>
                    </div>
                    <div className="md:container m-auto px-15 pt-45">
                        <button className="glow-white transition  delay-150 duration-75 ease-in-out transform mb-6 border-2 rounded-full border-solid border-white text-white sm:text-Black-900 sm:bg-white text-15 lg:text-18 py-10 px-38 font-bold" onClick={() => setOpen(true)}>Assista o Vídeo</button>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ke4BiuSSzR4" onClose={() => setOpen(false)} className="modal-video" />
                    </div>
                </div>
                <div className="sm:p-0 md:container m-auto">
                </div>
            </div>
        </header>
    )
}

export default Home
