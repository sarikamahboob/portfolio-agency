import Head from 'next/head'
import Footer from '../components/Shared/Footer/Footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar/> */}
      {/* <HeroSec/> */}
      <Footer/>
      

     
    </div>
  )
}
