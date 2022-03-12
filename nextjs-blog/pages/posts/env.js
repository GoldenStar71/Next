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
            <p>Host: {props.host}</p>
               <p>Username: {props.username}</p>
               <p>Password: {props.password}</p>

         </Container>
      </>	  
   )
}

export async function getStaticProps() {
   // Connect to Database using DB properties
   return {
    props: { 
       host: process.env.DB_HOST,
       username: process.env.DB_USER,
       password: process.env.DB_PASS
    }
 }}