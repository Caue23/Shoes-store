import Head from 'next/head';
import styles from './home.module.scss';
import {Carousel} from '../components/Carousel'
import {Footer} from '../components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title >Shoes Store</title>
      </Head> 
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Tênis Esportivo Para Corrida Top</span>
            <p>Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e musculoso.</p>
            <a>R$1.000,00</a>
            <button>COMPRAR</button>
        </section>
        <Carousel/>
      </main>
      <Footer/>
    </>
  )
}

