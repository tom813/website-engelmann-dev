import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function HomePage() {
  const router = useRouter();

  /* useEffect(() => {
    // Set a delay of 2 seconds (2000 milliseconds) before redirecting
    setTimeout(() => {
      router.push('/thank-you');
    }, 3000);
  }, []); */

  return (
    <>
        <Head>
        {/* <!-- Event snippet for Test for KI Case study conversion page --> */}
<script>
  {`gtag('event', 'conversion', {'send_to': 'AW-11282831145/ahsMCPqcsOEYEKmuiYQq'});`}
</script>

        </Head>
    </>
  );  // Display a message while waiting to redirect
}