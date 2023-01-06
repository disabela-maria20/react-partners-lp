import ReactPlayer from 'react-player/lazy'

const HomeThanks = () => {
    return (
        <>
            <section className="text-white text-center bg-Blue-900 relative h-500 mb-45">
                <div className="md:container m-auto px-15">
                    <article className="lg:flex lg:items-center flex-col justify-center h-full">
                        <img src="/img/foguete.webp" alt="foguete" width="384" height="484" className="lg:absolute lg:right-0 m-auto" />
                        <div className="lg:flex lg:items-center flex-col justify-center h-full z-50">
                            <h1 className="font-bold text-26 sm:text-31 md:text-45 py-26 z-50 lg:pt-100">Obrigado por se inscrever no Partners!</h1>
                            <p className="border-t border-b text-18 leading-18 border-white border-solid lg:border py-8 px-15 mb-38 inline-block lg:rounded-full">Te enviamos um e-mail explicando os próximos passos!</p>
                            <p>Aproveite para assistir o nosso vídeo <strong>“O que é o Partners?”</strong>.</p>
                            <p className="pb-79 m-auto">É super rapidinho e ajuda a entender melhor o programa.</p>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <div className="md:container m-auto px-15">
                    <article className="video my-45 react-player lg:max-w-5xl m-auto">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ke4BiuSSzR4' className=""/>
                    </article>
                </div>
            </section>
        </>
    )
}

export default HomeThanks
