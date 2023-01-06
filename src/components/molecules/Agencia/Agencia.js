import React from 'react'
import Zoom from 'react-reveal/Zoom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Agencia = () => {
    return (
        <section className="relative bg-Black-160" id="agencia">
            <div className="flex justify-end">
                <article className="relative overflow-hidden hidden xl:block">
                    <video width="320" height="240" className="md:h-screen md:w-full" autoPlay={true} muted={true} >
                        <source src={"/video/video_home_escada.mp4"} type="video/mp4" />
                    </video>
                </article>
            </div>
            <Zoom bottom>
                <div className="px-15 xl:absolute md:top-0 w-full ">
                <div className="md:container grid grid-cols-1 md:grid-cols-8 pt-31 md:pt-0 items-center m-auto">
                    <article className="md:col-span-3 bg-Black-160">
                        <h2 className="font-bold text-31 md:text-left md:text-45 md:mt-66 leading-45 text-center text-Black-850 mb-15 md:mb-45">Desenvolvemos <br /><span className="p-4 bg-Blue-800 text-white">agências do futuro</span> </h2>
                        <p className="text-18 mb-18">Nós vamos ajudar sua agência a:</p>
                        <ul className="text-18 leading-18 space-x-18 mb-55 li-arrow">
                            <li className="ml-18 li-arrow">Vender mais e melhorar o ticket médio;</li>
                            <li className="li-arrow">Melhorar a gestão de pessoas;</li>
                            <li className="li-arrow">Aprender a precificar os seus serviços;</li>
                            <li className="li-arrow">Saber como demostrar valor;</li>
                            <li className="li-arrow">Aprender a contratar profissionais capacitados;</li>
                            <li className="li-arrow">Reter os seus clientes;</li>
                        </ul>
                        <AnchorLink href="#form">
                            <span className="btn-arrow border rounded-full border-solid px-22 py-8 w-full md:w-10/12 flex justify-between items-center md:mb-66 lg:mb-0">
                                <span className="text-15">Seja um Partner</span>
                                <img src="/img/arrow.webp" alt="seta para direita" width="19" height="16" className="transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                            </span>
                        </AnchorLink>
                    </article>
                    <article className="relative overflow-hidden xl:hidden md:col-span-5">
                        <video width="320" height="240" className="lg:w-full lg:h-screen hidden lg:block" autoPlay={true} muted={true} >
                            <source src={"/video/video_home_escada.mp4"} type="video/mp4" />
                        </video>
                        <img src="/img/ladder_person_desk.webp" alt="pessoa" width="1633" height="683" className="lg:hidden block py-38" style={{height: '375px', objectFit:'cover', objectPosition: "100%"}}/>
                    </article>
                </div>
            </div>
            </Zoom>
            
        </section>
    )
}

export default Agencia
