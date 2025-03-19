import Button from '../component/UI/Button';
import '../../style/index.css';
import { useLocation } from 'react-router-dom';
import { resultInfo } from '../constant/result';
import { useInternalRouter } from '@/src/hook/useInternalRouter';
const Result = () => {
  const location = useLocation();
  console.log('location.state:', location.state); // 전체 state 객체 확인

  const { result } = location.state || {};
  console.log('전달받은 result:', result); // result 값 확인

  // resultInfo에서 전달받은 mbti에 해당하는 항목을 찾아서 변수에 저장
  const currentResult = resultInfo.find(info => info.mbti === result);

  const router = useInternalRouter();
  return (
    <div className="result-page">
      {currentResult ? (
        <div className="result-type">
          <div className="result-image-wrapper">
            <img src={currentResult.image} alt={currentResult.name} />
          </div>
          <h2 className="result-title">{currentResult.name}</h2>
          <div className="hashTag-wrapper">
            {currentResult.hashTag.map((hashtag, index) => (
              <div key={index} className="hashTag">
                {hashtag}
              </div>
            ))}
          </div>
          <div className="content-box">
            {currentResult.content.map((content, index) => (
              <p key={index} className="content-item">
                ✅{content}
              </p>
            ))}
          </div>

          <div className="action-box">
            <div className="action-item">
              <Button text="결과 공유하기" type="action-button" />
            </div>
            <div className="action-item">
              <Button text="이미지 다운로드" type="action-button" />
            </div>
          </div>
        </div>
      ) : (
        <p>해당 MBTI 유형을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Result;
