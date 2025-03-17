import { useEffect, useState } from 'react';
import { useRouter } from '../hook/useRouter';
import HANA_LOGO from '../image/hana_logo.png';
import GBN_LOGO from '../image/gbn_logo.png';
import SNAKE from '../image/snake.png';

export default function Loading() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const images = [HANA_LOGO, GBN_LOGO, SNAKE];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setTimeout(() => {
      router.push('/result');
    }, 2000);
  }, [router]);

  return (
    <div style={styles.container}>
      <img style={styles.image} src={images[index]} />
      <span style={styles.text}> 성향 분석 중...</span>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '200px',
    margin: '30px 0',
  },
  text: {
    position: 'absolute',
    bottom: '30%',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.125rem',
  },
};
