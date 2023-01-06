import Head from 'next/head'
import dynamic from 'next/dynamic';
import Thanks from '../components/templates/Thanks/Thanks';

const thanks = () => {
    return (
        <>
           <Head>
				<title>Adventures Partners | Thanks</title>
			</Head> 
            <Thanks/>
        </>
    )
}

export default thanks
