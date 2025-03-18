import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FOX from '../image/animal/fox.png';
import DOLPHIN from '../image/animal/dolphin.png';
import CAT from '../image/animal/cat.png';
import PANDA from '../image/animal/panda.png';

const images = [FOX, DOLPHIN, CAT, PANDA];

export default function Loading() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {};

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate('/result', { state: { result } });
    }, 2000);
  }, [navigate, result]);

  return (
    <div className="loading-container">
      <img className="loading-image" src={images[index]} />
      <span className="loading-text"> 성향 분석 중...</span>
    </div>
  );
}
