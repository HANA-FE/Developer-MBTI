import Button from '../component/UI/Button';
import '../../style/index.css';
import QuestionText from '../component/UI/QuestionText';
import QuestionImage from '../component/UI/QuestionImage';
const Test = () => {
  return (
    <div>
      <QuestionText questionId={1} />
      <QuestionImage questionId={1} />
    </div>
  );
};

export default Test;
