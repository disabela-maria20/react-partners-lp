import CookieConsent from "react-cookie-consent";
import Link from 'next/link'

const Cookie = () => {
    return (
        <div>
            <CookieConsent
                buttonText="Aceitar"
                cookieName="partnersadventures"
                style={{
                    background: "black",
                    color: "white",
                    fontWeight: "regular",
                }}
                buttonStyle={{
                    background: "#fff",
                    color: "#000",
                    fontWeight: "regular",
                    textTransform: "uppercase",
                    borderRadius: '25px',
                    padding:'5px 20px'
                }}
                expires={999}
                overlay>
                Este site usa cookies de terceiros para elevar a experiência do usuário. Confira nossa <Link href="https://adventures.inc/politica-de-privacidade/"><a className="hover:underline" target="_blank" rel="noreferrer">Política de Privacidade</a></Link>.
            </CookieConsent>
        </div>
    )
}

export default Cookie