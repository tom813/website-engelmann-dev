import '../styles/globals.scss'

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
    <Component {...pageProps} />
  </>
    )
}
 
export default MyApp
