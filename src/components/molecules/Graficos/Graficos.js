import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ProgressBar from 'react-customizable-progressbar'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Graficos = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        spacing: 30,
        initial: 0,
        breakpoints: {
            '(min-width: 300px)': {
                slidesPerView: 2,
            },
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <>
            <section className="bg-Black-800" id="resultado">
                <div className="md:container m-auto px-15">
                    <h2 className="text-26 md:text-45 md:pb-66 font-bold leading-title pt-55 pb-38 text-white text-center">Conheça os resultados do programa</h2>
                    <div className="lg:hidden pb-38">
                        <Fade>
                            <div className="navigation-wrapper">
                                <div ref={sliderRef} className="keen-slider">
                                    <div className="keen-slider__slide number-slide1">
                                        <div className="p-15 h-full md:p-31 rounded-2xl bg-Black-750 text-center flex flex-col justify-center text-white progress">
                                            <div className="relative">
                                                <ProgressBar
                                                    progress={31}
                                                    radius={100}
                                                    strokeWidth={20}
                                                    cut={0}
                                                    strokeColor="#2C0AFE"
                                                    trackStrokeColor="#323232"
                                                    trackTransition="1s ease"
                                                    pointerStrokeWidth={30}
                                                    initialAnimation={true}
                                                    className="m-auto"
                                                />
                                                <span className="text-55 absolute w-full h-full top-0 flex justify-center items-center text-white font-bold">181</span>
                                            </div>
                                            <h3 className="text-22 mt-22 font-bold">Agências</h3>
                                            <p className="font-light text-22">pelo Brasil</p>
                                        </div>
                                    </div>

                                    <div className="keen-slider__slide number-slide3">
                                        <div className="col-span-4 p-15 rounded-2xl bg-Black-750 flex items-center h-full progress">
                                            <img src='/img/grafico-faturamento-mobile.webp' alt='Grafico de faturamento' width='983' height='464' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {slider && (
                            <div className="flex justify-center pt-15 pb-38">
                                {[...Array(slider.details().size).keys()].map((idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                slider.moveToSlideRelative(idx)
                                            }}
                                            className={currentSlide === idx ? "cursor-pointer w-15 h-15 bg-TrueGrey-450 rounded-full mr-22" : "cursor-pointer w-15 h-15 bg-TrueGrey-650 rounded-full mr-22"}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </div>
                    <Zoom>
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-6 gap-x-15 gap-y-26 lg:max-w-7xl px-15 lg:m-auto pb-55 lg:pb-114">
                                <div className="col-span-2 p-15 rounded-2xl bg-Black-750 text-center text-white progress">
                                    <div className="relative">
                                        <ProgressBar
                                            progress={31}
                                            radius={100}
                                            strokeWidth={20}
                                            cut={0}
                                            strokeColor="#2C0AFE"
                                            trackStrokeColor="#323232"
                                            trackTransition="1s ease"
                                            pointerStrokeWidth={30}
                                            initialAnimation={true}
                                            className="m-auto"
                                        />
                                        <span className="text-55 absolute w-full h-full top-0 flex justify-center items-center text-white font-bold">181</span>
                                    </div>
                                    <h3 className="text-22 mt-22 font-bold">Agências</h3>
                                    <p className="font-light text-22">pelo Brasil</p>
                                </div>
                                <div className="col-span-4 p-15 rounded-2xl bg-Black-750 flex items-center h-full progress">
                                    <img src='/img/grafico-faturamento.webp' alt='Grafico de faturamento' width='983' height='464' />
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </section>
        </>

    )
}

export default Graficos
