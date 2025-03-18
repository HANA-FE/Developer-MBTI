import { useRouter } from '../hook/useRouter';

export default function Result() {
  const router = useRouter();
  return (
    <div>
      나의 성향 분석 결과
      <button onClick={() => router.push('/')}>홈으로</button>
    </div>
  );
}
