import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useInternalRouter() {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path, options) {
        navigate(path, options);
      },
    };
  }, [navigate]);
}
