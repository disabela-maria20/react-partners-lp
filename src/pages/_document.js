import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" />
                    <meta name="title" content="Adventures Partners | #ForçadosNúmeros" />
                    <meta name="description" content="O Programa Partners vai te conectar com especialistas que irão te ajudar a acelerar e gerar resultados para o seu negócio através de metodologias de profissionais que tocam a Adventures, Inc." />
                    <meta name="keywords" content="partners, força do números, adventures, adventures.inc, programa, marketing, agência" />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="Portuguese" />
                    <meta name="author" content="Adventures.inc" />
                    <meta name="theme-color" content="#000" />
                    <meta name="GooGhywoiu9839t543j0s7543uw1" content="pls add roberto.santos@adventures.inc to GA account UA-198554422-1 with ‘Manage Users and Edit’ permissions - date 28/07/2022"></meta>
                    <link rel="canonical" href="https://partnersadventures.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <!-- Google Tag Manager --> */}
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TVRLKWZ');`}} />
                    {/* <!-- End Google Tag Manager --> */}

                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript>
                        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVRLKWZ"
                            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
                    </noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}
                </body>
            </Html>
        )
    }
}
