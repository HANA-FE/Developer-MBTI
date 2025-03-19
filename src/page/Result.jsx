import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
// lib
import { copyToClipboard } from '@/src/lib';
// constant
import { RESULT_INFO } from '@/src/constant/result';
// component
import Button from '@/src/component/UI/Button';

const Result = () => {
  const location = useLocation();
  const { name, result } = location.state || {};

  const currentResult = RESULT_INFO.find(info => info.mbti === result);

  const debouncedCopy = debounce(async () => await copyToClipboard(import.meta.env.VITE_CLIENT_BASE_URL), 500, {
    leading: true,
  });

  return (
    <div className="result-page">
      {currentResult ? (
        <div className="result-type">
          <div className="result-image-wrapper">
            <img src={currentResult.image} alt={currentResult.name} />
          </div>
          <h2 className="result-title">
            {name}님은<br></br>
            {currentResult.name}
          </h2>
          <div className="hashTag-wrapper">
            {currentResult.hashTag.map((hashtag, index) => (
              <div key={index} className="hashTag">
                {hashtag}
              </div>
            ))}
          </div>
          <div className="result-content-box">
            {currentResult.content.map((content, index) => (
              <p key={index} className="result-content-item">
                ✅ {content}
              </p>
            ))}
          </div>

          <div className="result-button-wrapper">
            <Button text="테스트 공유하기" onClick={debouncedCopy} type="result-button-style" />
            <br />

            <Button
              text="이미지 다운로드"
              type="result-button-style {
"
            />
          </div>
        </div>
      ) : (
        <p>해당 MBTI 유형을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Result;
