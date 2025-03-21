import { useInternalRouter } from '../hook/useInternalRouter';
// style
import '@/style/index.css';
// component
import Button from '@/src/component/UI/Button';
import Cat from '@/src/image/homeCat.png';
import Screen from '@/src/image/home.screen.png';

function Home() {
  const router = useInternalRouter();

  return (
    <div className="first">
      <div className="title-wrapper">
        <h1 className="title">개발놈 TEST</h1>
        <br></br>
        <span className="sub-title">당신은 어떤 개발 동물일까요?</span>
      </div>

      <div className="home-image-wrapper">
        <img className="screen" src={Screen} alt="screen" />
        <img className="cat" src={Cat} alt="Cat" />
      </div>

      <div className="Home-button">
        <Button onClick={() => router.push('/name')} type="start-button" text="테스트 시작하기" />
      </div>
    </div>
  );
}

export default Home;
