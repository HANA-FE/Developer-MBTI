import Button from '../component/UI/Button';
import '../../style/index.css';
import { QuestionUtils } from '../constant/Question';
import QuestionText from '../component/UI/QuestionText';
import QuestionImage from '../component/UI/QuestionImage';
const Test = () => {
  return (
    <div>
      <h1>테스트</h1>
      <QuestionText />
      <QuestionImage />
      <div>
        <Button className="start-button">테스트 시작</Button>
      </div>
      <div>
        <Button className="answer-button">테스트 시작</Button>
      </div>
    </div>
  );
};

export default Test;
