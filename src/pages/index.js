import Head from 'next/head'
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/templates/Main/Main'), {
	// loading: () => <Loading />,
});

const index = () => {
	return (
		<>
			<Head>
				<title>Adventures Partners | #forçadosnúmeros</title>
			</Head>
			<Home />
		</>
	)
}

export default index
