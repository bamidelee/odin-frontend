import styles from '../styles/loader.module.css'
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';

export default function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);
  
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError',  handleComplete)
  
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    return  <div className={`${styles.loaderContainer} ${!loading && styles.notLoading}`}>
        <div className={styles.loader}>
        <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
        </div>
        
        <div className={`${styles.loader} ${styles.triangle}`}>
        <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
        </div>
        
        <div className={styles.loader}>
        <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
        </div>
    </div>
  }