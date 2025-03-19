import { QUESTION } from '@/src/constant';

const QuestionText = ({ questionId }) => {
  return (
    <div className="question-text-container">
      <p className="question-text">{QUESTION[questionId].text}</p>
    </div>
  );
};

export default QuestionText;
