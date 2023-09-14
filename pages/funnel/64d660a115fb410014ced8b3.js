import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Set a delay of 2 seconds (2000 milliseconds) before redirecting
    setTimeout(() => {
      router.push('/thank-you');
    }, 3000);
  }, []);

  return <div>Redirecting...</div>;  // Display a message while waiting to redirect
}