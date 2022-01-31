import Link from 'next/link';
import Head from 'next/head';
import Container from '../../components/container';

export default function FirstPost() {
    return (
        <>
            <Container>
                <Head>
                    <title>welcome</title>
                </Head>
                <h1>My First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </h2>
            </Container>

        </>
    )      
}