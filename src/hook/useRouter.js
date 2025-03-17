import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path) {
        navigate(path);
      },
    };
  }, [navigate]);
}
