import '../styles/globals.scss';
import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MGNVVHQ3MH">
</script>
<script>
  {`window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-MGNVVHQ3MH')`}
</script>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
    )
}
 
export default MyApp
