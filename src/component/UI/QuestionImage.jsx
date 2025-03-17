import QUESTION from '../../constant/Question';

const QuestionImage = ({ questionId }) => {
  return <img src={QUESTION[questionId].image} alt={`질문 ${questionId}`} />;
};

export default QuestionImage;
