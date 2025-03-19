import { useInternalRouter } from '@/src/hook/useInternalRouter';

export default function Result() {
  const router = useInternalRouter();
  return (
    <div>
      나의 성향 분석 결과
      <button onClick={() => router.push('/')}>홈으로</button>
    </div>
  );
}
