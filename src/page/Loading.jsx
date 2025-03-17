import { useEffect, useState } from 'react';
import { useRouter } from '../hook/useRouter';
import HANA_LOGO from '../image/hana_logo.png';
import GBN_LOGO from '../image/gbn_logo.png';
import SNAKE from '../image/snake.png';

const images = [HANA_LOGO, GBN_LOGO, SNAKE];

export default function Loading() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.push('/result');
    }, 2000);
  }, [router]);

  return (
    <div className="loading-container">
      <img className="loading-image" src={images[index]} />
      <span className="loading-text"> 성향 분석 중...</span>
    </div>
  );
}
