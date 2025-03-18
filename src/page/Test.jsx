import Button from '../component/UI/Button';
import '../../style/index.css';
import QuestionText from '../component/UI/QuestionText';
import QuestionImage from '../component/UI/QuestionImage';
const Test = () => {
  const id = 12;
  return (
    <div className="test-page">
      {/* 질문 영역 */}
      <div className="question-wrapper">
        <QuestionText questionId={id} />
      </div>

      {/* 이미지 영역 */}
      <div className="image-wrapper">
        <QuestionImage questionId={id} />
      </div>
    </div>
  );
};

export default Test;
