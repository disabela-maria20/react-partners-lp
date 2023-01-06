import Zoom from 'react-reveal/Zoom'
const Register = () => {
    return (
        <section className="bg-white" id="form">
            <div className="m-auto md:max-w-2xl">
                <h2 className="text-center py-38 md:py-79 md:text-45 font-bold text-26 text-Black-800 ">Quero me inscrever!</h2>
                <Zoom>
                    <iframe className='w-full' height={850} src="https://app.pipefy.com/public/form/0CJU6ifz?embedded=true" frameBorder="0" />
                </Zoom>
            </div>
        </section>

    )
}
export default Register
