import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Screenshots from "../components/Screenshots"
import Partners from "../components/Partners"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

// import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloudy</title>
        <meta name='description' content='Cloud hosting provider' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
        <Partners />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
