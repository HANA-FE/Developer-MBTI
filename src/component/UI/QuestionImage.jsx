import { QUESTION } from '@/src/constant';

const QuestionImage = ({ questionId }) => {
  return <img className="question-image" src={QUESTION[questionId].image} alt={`질문 ${questionId}`} />;
};

export default QuestionImage;
