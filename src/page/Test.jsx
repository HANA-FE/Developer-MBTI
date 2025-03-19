import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// hook
import { useInternalRouter } from '../hook/useInternalRouter';
// style
import '@/style/index.css';
// constant
import { QUESTION } from '@/src/constant';
// component
import Button from '@/src/component/UI/Button';
import QuestionText from '@/src/component/UI/QuestionText';
import QuestionImage from '@/src/component/UI/QuestionImage';
import Progress from '@/src/component/UI/Progress';

const Test = () => {
  const location = useLocation();
  const router = useInternalRouter();

  const { name } = location.state || {};

  // 이름 입력 안했을 경우 name입력 칸으로
  useEffect(() => {
    console.log(name);
    if (!name) router.push('/name');
  }, [name, router]);

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
      router.push('/loading', { state: { name, result } });
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
