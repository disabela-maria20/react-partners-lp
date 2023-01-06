import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';


const Accordion = () => {
    const data = [
        {
            id: 1,
            titulo: 'O que é o Partners?',
            paragrafo: 'É um programa de aceleração de agências de publicidade e marketing com o foco em transformar o mercado de comunicação por meio do desenvolvimento de líderes, que melhorem a produtividade dos seus times e gerem resultados com velocidade e qualidade para seus clientes.'
        }, {
            id: 2,
            titulo: 'O que fazemos?',
            paragrafo: 'O Programa Partners vai te conectar com especialistas que irão te ajudar a acelerar e gerar resultados para o seu negócio através de conhecimentos, metodologias e acompanhamento individualizado de profissionais que tocam a Adventures, Inc.'
        }, {
            id: 3,
            titulo: 'Nossos valores',
            paragrafo: `(A) Consultoria exclusiva com PXS (Partner Experience Specialist);</br> (B) Programa de treinamento;</br>(C) Área de membros;</br> (D) Acesso às inovações da Adventures;</br> (E) Grupo de trocas - networking com outros partners;</br> (F) Mentorias;</br> (G) Mastermind;</br> (H) Pitch Partners - venda de produtos entre as agências do programa.`
        }, {
            id: 4,
            titulo: 'Nosso objetivo',
            paragrafo: `Ajudar agências de publicidade ou marketing, independente do porte ou segmento, a prosperarem no mercado de comunicação, crescendo seus faturamentos de forma controlada, com saúde e independência financeira.`
        }, {
            id: 5,
            titulo: 'Para quem é?',
            paragrafo: `Para agências de publicidade e marketing que atendem pequenas e médias empresas, que faturam entre R$5k a R$100k por mês e que buscam alavancar seu negócio, gerar mais valor para seus clientes, aumentar o seu ticket médio, organizar a sua operação e que queiram fazer parte do maior ecossistema agências do Brasil.`
        }
    ]
    const [abrir, setabrir] = useState("0")
    const [selected, setSelectd] = useState(null)

    const Toogle = i => {
        if (selected === i) {
            return setSelectd(null)
        }
        setSelectd(i)
    }


    return (
        <Zoom>
            <section className="bg-Blue-800 lg:hidden">
                {data.map((data, i) => {
                    return (
                        <details key={i} className="accordio relative">
                            <summary className="w-full flex justify-between items-center" onClick={() => { setabrir(!abrir) }}>
                                <span>{data.titulo}</span>
                            </summary>
                            <p dangerouslySetInnerHTML={{ __html: data.paragrafo }} />
                        </details>
                    )
                })}
            </section>
            <section className="hidden lg:block">
                <article className="flex overflow-hidden">
                    {data.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className={`${selected === i ? 'accordio-desk relative active' : 'accordio-desk relative'}`}
                                onClick={() => Toogle(i)}>
                                <div className={selected === i ? 'flex justify-between flex-row-reverse': 'flex justify-between flex-col h-auto'}>
                                    {selected === i ?
                                        <img src="/img/circle_chevron_up_true.webp" alt="seta" width="40" height="40" className="w-79"/> :
                                        <img src="/img/circle_chevron_up.webp" alt="seta" width="72" height="72"className="w-45"  />
                                    }
                                    <h2>
                                        {data.titulo}
                                    </h2>
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: data.paragrafo }} />
                            </div>   
                        )
                    })}
                </article>
            </section>
        </Zoom>

    )
}

export default Accordion
