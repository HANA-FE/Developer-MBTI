import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// hook
import { useInternalRouter } from '../hook/useInternalRouter';
// image
import FOX from '@/src/image/animal/fox.png';
import DOLPHIN from '@/src/image/animal/dolphin.png';
import CAT from '@/src/image/animal/cat.png';
import PANDA from '@/src/image/animal/panda.png';

const images = [FOX, DOLPHIN, CAT, PANDA];

export default function Loading() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const { name, result } = location.state || {};
  const router = useInternalRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.push('/result', { state: { name, result } });
    }, 2000);
  }, [router, name, result]);

  return (
    <div className="loading-container">
      <img className="loading-image" src={images[index]} />
      <span className="loading-text"> 성향 분석 중...</span>
    </div>
  );
}
