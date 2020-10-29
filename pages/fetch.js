import Head from 'next/head';
import Layout from '../components/Layout';

function Fetch({ data }) {
	console.log(data);
	return (
		<Layout>
			<Head>
				<title>Fetch</title>
			</Head>
			<h1>Fetch Page</h1>
			{data.map((item) => (
				<h3>{item.name}</h3>
			))}
		</Layout>
	);
}

Fetch.getInitialProps = async (ctx) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return { data: data };
};

export default Fetch;
