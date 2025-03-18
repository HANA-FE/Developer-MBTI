import { useRouter } from '../hook/useRouter';
import Progress from '../component/UI/Progress';
import NetworkGraph from '../component/NetworkGraph';
import Button from '../component/UI/Button';
import Test from './Test';

export default function Home() {
  const router = useRouter();

  const QUESTION_LENGTH = 12;
  const cnt = 8;

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
        <Progress value={(cnt / QUESTION_LENGTH) * 100} text={`${cnt}/${QUESTION_LENGTH}`} cat />
        <NetworkGraph />
      </div>
    </div>
  );
}
