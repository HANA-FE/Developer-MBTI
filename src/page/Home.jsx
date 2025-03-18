import { useRouter } from '../hook/useRouter';
import Progress from '../component/UI/Progress';
import NetworkGraph from '../component/NetworkGraph';
import Button from '../component/UI/Button';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Progress value={(5 / 12) * 100} text="5/12" cat />
        <NetworkGraph />
      </div>
      <Button type="start-button" onClick={() => router.push('/loading')} text="시작하기" />
    </div>
  );
}
