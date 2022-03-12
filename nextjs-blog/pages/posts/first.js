import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

export default function FirstPost(props) {
   return (
      <>
         <Container>
            <Head>
               <title>My First Post</title>
            </Head>
            <h1>My First Post</h1>
            <h2>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <div>Next stars: {props.stars}</div>
            </h2>
         </Container>
      </>	  
   )
}

export async function getStaticProps() {
   const res = await fetch('https://api.github.com/repos/vercel/next.js')
   const json = await res.json()
   return {
      props: { stars: json.stargazers_count }
   }
}