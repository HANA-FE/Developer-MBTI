import { useEffect, useState } from 'react';
import { useRouter } from '../hook/useRouter';
import FOX from '../image/animal/fox.png';
import DOLPHIN from '../image/animal/dolphin.png';
import CAT from '../image/animal/cat.png';
import PANDA from '../image/animal/panda.png';

const images = [FOX, DOLPHIN, CAT, PANDA];

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
