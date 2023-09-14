import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirecting to another page
    router.push('/thank-you');
  }, []);

  return null;  // Render nothing
}