import Link from "next/link"
import LazyLoad from "react-lazyload"

import { TiSocialFacebook } from 'react-icons/ti'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="">
            <div className="grid grid-cols-8 md:gap-55">
                <div className="bg-TrueGrey-300 px-22 pb-31 pt-55 col-span-8 md:col-span-3 md:px-55">
                    <LazyLoad>
                        <img src="/img/logo-adventures-n.png" alt="adventures" className="pt-45 pb-22 w-164" />
                    </LazyLoad>
                    <h3 className="text-22 font-bold pb-6">MANTER CONTATO</h3>
                    <p className="text-15 opacity-60">Informe seu email e receba novidades da Adventures!</p>
                    <div className="pb-55">
                        <div className="pb-55" dangerouslySetInnerHTML={{
                            __html: `
                            <div role="main" id="partners-formulario-para-captura-de-e-mail-construcao-de-base-cb24aa47f0972e04e86e"></div><script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script><script type="text/javascript"> new RDStationForms('partners-formulario-para-captura-de-e-mail-construcao-de-base-cb24aa47f0972e04e86e', 'null').createForm();</script>
                        `}} />
                    </div>
                    <div className="grid grid-cols-2">
                        <Link href="https://www.ccbrasil.cc/"target="_blank" rel="noreferrer">
                           
                                <LazyLoad>
                                    <img src="/img/cap-consciente-logo.webp" />
                                    <span className="text-0">ccbrasil</span>
                                </LazyLoad>
                        
                        </Link>
                        <Link href="https://carbonext.com.br/" target="_blank" rel="noreferrer">
                          <LazyLoad>
                                    <img src="/img/selo-carbonext.webp" />
                                    <span className="text-0">carbonext</span>
                         </LazyLoad>
                        </Link>
                    </div>
                </div>
                <div className="col-span-8 md:col-span-3">
                    <ul className="text-15 pt-66 md:text-20 px-15">
                        <li className="mb-10">
                            <h3 className="font-bold">Adventures</h3>
                        </li>
                        <li className="mb-10 opacity-60">
                            <Link href="https://adventures.inc">
                                <span target="_blank" rel="noreferrer">Adventures</span>
                            </Link>
                        </li >
                        <li className="mb-10 opacity-60">
                            <Link href="https://partnersadventures.com/">
                                <span target="_blank" rel="noreferrer">AdventuresPartners</span>
                            </Link>
                        </li >
                        <li className="mb-10 opacity-60">
                            <Link href="https://culture.adventures.inc"target="_blank" rel="noreferrer">
                                <span>Cultura da Adventures</span>
                            </Link>
                        </li>
                        <li className="mb-10 opacity-60">
                            <Link href="https://jobs.kenoby.com/adventures"target="_blank">
                                <span >Junte-se ao Time</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-8 md:col-span-2">
                    <address className="not-italic text-15 pt-38 md:pt-66 md:text-20  px-15">
                        <h3 className="font-bold">SÃO PAULO – SP</h3>
                        <p className="opacity-60">Rua Gilberto Sabino, 215</p>
                        <p className="opacity-60">Pinheiros</p>
                        <p className="mb-26 opacity-60">CEP: 05425-020</p>

                        <h3 className="font-bold">RIO DE JANEIRO – RJ</h3>
                        <p className="opacity-60">Rua Hélios Seelinger, 155</p>
                        <p className="opacity-60">Barra da Tijuca</p>
                        <p className="mb-26 opacity-60">CEP: 22640-040</p>
                    </address>
                    <nav className="flex text-22 px-15 mb-38">
                        <Link href="https://www.facebook.com/thead.partners"target="_blank"  rel="noreferrer">
                            <span className="mr-8">
                                <span className="text-0">facebook</span>
                                <TiSocialFacebook />
                            </span>
                        </Link>
                        <Link href="https://www.instagram.com/thead.partners/"target="_blank"rel="noreferrer">
                            <samp  className="mr-8" >
                                <span className="text-0">instagram</span>
                                <AiOutlineInstagram />
                            </samp>
                        </Link>
                        <Link href="https://www.linkedin.com/company/theadventures-partners/"target="_blank"rel="noreferrer" >
                            <samp className="mr-8" >
                                <span className="text-0">linkedin</span>
                                <FaLinkedinIn />
                            </samp>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="bg-Black-850 text-center text-13 md:text-15 py-15">
                <p className=" text-white pb-13 font-extralight">
                    CNPJ: 30.798.660/0001-20. Razão Social: Avellar Consultoria, Publicidade e Marketing LTDA
                </p>
                <p className="text-white font-bold">
                    ©2021 ADVENTURES. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    )
}

export default Footer
