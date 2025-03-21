import { useState, useEffect } from 'react';

export function useDeviceInfo() {
  const [isAOS, setIsAOS] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const { userAgent } = navigator;
    setIsAOS(/iPhone|iPad/i.test(userAgent));
    setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
  }, []);

  const isMobile = isIOS || isAOS;
  return { deviceInfo: { isIOS, isAOS, isMobile, isWeb: !isMobile } };
}
