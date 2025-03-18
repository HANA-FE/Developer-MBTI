import Button from '../component/UI/Button';
import '../../style/index.css';
import QuestionText from '../component/UI/QuestionText';
import QuestionImage from '../component/UI/QuestionImage';
import QUESTION from '../constant/Question';

const Test = () => {
  const id = 1;
  return (
    <div className="test-page">
      {/* 질문 영역 */}
      <div className="question-wrapper">
        <QuestionText questionId={id} />
      </div>

      {/* 이미지 영역 */}
      <div className="question-image-wrapper">
        <QuestionImage questionId={id} />
      </div>

      {/* 버튼 영역 */}
      <div className="test-button-wrapper">
        <Button text={QUESTION[id].answers[0].text} type="test-button" />
        <Button text={QUESTION[id].answers[1].text} type="test-button" />
      </div>
    </div>
  );
};

export default Test;
