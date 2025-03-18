import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// style
import '../../style/index.css';
// components
import Button from '../component/UI/Button';
import QuestionText from '../component/UI/QuestionText';
import QuestionImage from '../component/UI/QuestionImage';
import QUESTION from '../constant/Question';
import Progress from '../component/UI/Progress';

const Test = () => {
  const navigate = useNavigate();
  // id 1부터 시작, QUESTION의 길이 : 13, QUESTION 0번째의 값에는 NULL 값이 들어있음
  const [currentId, setCurrentId] = useState(1);
  const [answers, setAnswers] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  const calculateResult = answers => {
    const result = [
      answers.E > answers.I ? 'E' : 'I',
      answers.S > answers.N ? 'S' : 'N',
      answers.T > answers.F ? 'T' : 'F',
      answers.P > answers.J ? 'P' : 'J',
    ].join('');

    return result;
  };

  const handleAnswerClick = answerType => {
    // 선택한 답변 타입의 카운트 증가
    setAnswers(prev => ({
      ...prev,
      [answerType]: prev[answerType] + 1,
    }));

    // 다음 질문으로 이동
    if (currentId < QUESTION.length - 1) {
      setCurrentId(prev => prev + 1);
    }
    // 마지막 질문일 경우
    else {
      const result = calculateResult(answers);
      navigate('/loading', {
        state: { result },
      });
    }
  };

  const progress = Object.values(answers).reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="test-page">
      <div className="home-progress-wrapper">
        <Progress value={(progress / 12) * 100} text={`${progress}/${12}`} />
      </div>

      <div className="question-wrapper">
        <QuestionText questionId={currentId} />
      </div>

      <div className="question-image-wrapper">
        <QuestionImage questionId={currentId} />
      </div>

      <div className="test-button-wrapper">
        <Button
          text={QUESTION[currentId].answers[0].text}
          type="test-button"
          onClick={() => handleAnswerClick(QUESTION[currentId].answers[0].type)}
        />
        <Button
          text={QUESTION[currentId].answers[1].text}
          type="test-button"
          onClick={() => handleAnswerClick(QUESTION[currentId].answers[1].type)}
        />
      </div>
    </div>
  );
};

export default Test;
