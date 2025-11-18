'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';
import Loading from './Loading';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    // Show loading screen when pathname changes
    setLoading(true);
    
    // Hide loading screen after a short delay to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time between pages

    return () => clearTimeout(timer);
  }, [pathname, setLoading]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && children}
    </>
  );
}