import Button from '../component/UI/Button';
import '../../style/index.css';
import { useLocation } from 'react-router-dom';
import { resultInfo } from '../constant/result';
const Result = () => {
  const location = useLocation();
  console.log('location.state:', location.state); // 전체 state 객체 확인

  const { result } = location.state || {};
  console.log('전달받은 result:', result); // result 값 확인

  // resultInfo에서 전달받은 mbti에 해당하는 항목을 찾아서 변수에 저장
  const currentResult = resultInfo.find(info => info.mbti === result);

  return (
    <div className="result-page">
      <h1>당신의 개발자 유형은?</h1>
      {currentResult ? (
        <div className="result-type">
          <h2>{currentResult.name}</h2>
          <div className="hashtags">
            {currentResult.hashTag.map((hashtag, index) => (
              <span key={index} className="hashtag">
                {hashtag}
              </span>
            ))}
          </div>
          <div className="content">
            {currentResult.content.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
          <div className="image">
            <img src={currentResult.image} alt={currentResult.name} />
          </div>
        </div>
      ) : (
        <p>해당 MBTI 유형을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Result;
