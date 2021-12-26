import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         <p><span style="color: #00ccff;"><strong><a href="https://ar.seovalide.com/backlinks/">شراء باك لينك</a><br /><a href="https://seovalide.com/obtenir-des-backlinks/">obtenir des backlinks</a><br /><a href="https://seovalide.com/acheter-des-backlinks/">acheter des backlinks</a><br /><a href="https://service.seovalide.com/">خدمات سيو</a><br /><a href="https://services.seovalide.com/">services seo</a><br /><a href="https://seovalide.com/">seo Maroc</a><br /><a href="https://ar.seovalide.com/">أفضل شركة خدمات سيو</a><br /><br /></strong></span></p>
<p><span style="color: #00ccff;"><strong><a style="color: #00ccff;" href="https://canadanouvelles.com/spotify-premium-gratuit/">Spotify Premium Apk</a></strong></span></p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
