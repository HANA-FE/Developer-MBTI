import { useState, useEffect } from 'react';

export function useDeviceInfo() {
  const [isAOS, setIsAOS] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [isNaver, setIsNaver] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAOS(/android/i.test(userAgent));
    setIsIOS(/iphone|ipad/i.test(userAgent));
    setIsChrome(/crios/i.test(userAgent));
    setIsNaver(/naver/i.test(userAgent));
  }, []);

  const isMobile = isIOS || isAOS;
  const isWeb = !isMobile;

  return { deviceInfo: { isIOS, isAOS, isMobile, isWeb, isChrome, isNaver } };
}
