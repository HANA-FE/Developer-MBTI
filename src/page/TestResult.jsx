import { useLocation } from 'react-router-dom';

const TestResult = () => {
  const location = useLocation();
  console.log('location.state:', location.state); // 전체 state 객체 확인

  const { name, result } = location.state || {};
  console.log('전달받은 result:', result); // result 값 확인

  return (
    <div className="result-page">
      <h1>{`${name}님의 개발자 유형은?`}</h1>
      <div className="result-type">{result}</div>
    </div>
  );
};

export default TestResult;
