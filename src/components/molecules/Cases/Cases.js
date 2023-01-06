import React, { useState, useEffect, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SlideAgencias from '../SlideAgencias/SlideAgencias'
import Slide from 'react-reveal/Slide';
import dynamic from "next/dynamic"
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false })

const Cases = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [pause, setPause] = useState(false)
    const timer = useRef()
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    const [isOpen6, setOpen6] = useState(false)
    const [isOpen7, setOpen7] = useState(false)
    const [isOpen8, setOpen8] = useState(false)

    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        spacing: 30,
        loop: true,
        duration: 1000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 1000000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <section className="bg-Blue-800" id="case">
            <div className="md:container m-auto px-15">
                <div className="grid md:grid-cols-2 md: gap-38 lg:gap-18 md:pt-114 md:pb-79">
                    <div className="pt-79 pb-66 md:w-11/12 md:p-0 md:flex md:items-center">
                        <Slide left>
                            <h2 className="text-white font-bold text-26 sm:text-31 sm:leading-31 md:text-left md:font-light md:text-45 md:leading-45 leading-22 text-center"> Conheça histórias de sucesso de <span className="md:font-bold">agências que estão transformando seus negócios com o Partners.</span> </h2>
                        </Slide>
                    </div>
                    <Slide right>
                        <div className="navigation-wrapper">
                            <div ref={sliderRef} className="keen-slider">
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/dopamina.webp" alt="dopamina" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 w-full py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">Dopamina já fatura mais de 400% só em 1 ano de Programa Partners. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/mahara-marketing.webp" alt="Mahara Marketing" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">Como o Partners ajudou a Mahara Marketing a faturar 3x vezes mais em apenas 8 meses de programa. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen2(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/renke.webp" alt="Renke" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">“O que eu vivia antes era escuridão. Estou 5 anos à frente de conhecimento”, disse Junior Mendes. Founder e CEO Renke Studio. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen3(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/mindblowing.webp" alt="Mindblowing" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">A Mindblowing entrou no programa com o intuito de organizar a casa e crescer de forma estruturada. Em 1 mês e meio isso já está acontecendo. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen4(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/norde-digital.webp" alt="Norde Digital" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">“A entrada no programa Partners foi uma virada de chave” disse Carol Norde. Founder e CEO da Norde. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen5(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/nowpublicidade.webp" alt="Now Publicidade" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">Como seu resultado já ajudou a Now Publicidade a estruturar seus processos para ampliar a agência em 3 meses. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen6(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/rd-brasil.webp" alt="RD Brasil" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">“Hoje a gente já consegue enxergar a RD Brasil daqui 1 ano com o programa Partners ajudando a gente” disse Rafael Fonseca. Founder RD Brasil. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen7(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="relative overflow-auto">
                                        <img src="/img/pixelmade.webp" alt="Pixelmade" width="592" height="347" className="cases-img md:h-347 md:object-cover object-center w-full rounded-3xl" />
                                        <div className="text-18 leading-18 py-15 px-26 absolute bottom-0 bg-Black-800 text-white  opacity-95 rounded-t-2xl rounded-b-3xl">
                                            <h3 className="font-bold">Cases de Sucesso</h3>
                                            <p className="opacity-90">Como o programa Partners está ajudando a Pixelmade a se estruturar após o período pós-pandemia. </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                                            <button onClick={() => setOpen8(true)}>
                                                <img src="/img/player.webp" className="w-55 opacity-50" width="81" height="81" alt="Player de video" />
                                                <span className="text-0">player</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {slider && (
                                <div className="flex justify-center pt-15 md:pb-26 pb-38">
                                    {[...Array(slider.details().size).keys()].map((idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    slider.moveToSlideRelative(idx)
                                                }}
                                                className={currentSlide === idx ? "cursor-pointer w-15 h-15 bg-TrueGrey-450 rounded-full mr-22 opacity-50" : "cursor-pointer w-15 h-15 bg-TrueGrey-300 rounded-full mr-22"}
                                            />
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </Slide>
                </div>
                <div className="border border-solid border-white" />
                <SlideAgencias />
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="xuTNH8G4oz8" onClose={() => setOpen(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="VRctltyAg-c" onClose={() => setOpen2(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="Vq-eGl1KWr8" onClose={() => setOpen3(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="P7K6-NeYg3k" onClose={() => setOpen4(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="FfTJ_CaX0qo" onClose={() => setOpen5(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen6} videoId="MbvTmB2P0Y0" onClose={() => setOpen6(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen7} videoId="RxfZtGN0w7M" onClose={() => setOpen7(false)} className="modal-video" />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen8} videoId="MUhsNSMAjOc" onClose={() => setOpen8(false)} className="modal-video" />
        </section>
    )
}

export default Cases
