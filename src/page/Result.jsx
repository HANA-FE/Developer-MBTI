import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
// lib
import { useInternalRouter } from '../hook/useInternalRouter';
import { useDeviceInfo } from '../hook/useDeviceInfo';
import { copyToClipboard, handleDownload } from '@/src/lib';
// constant
import { RESULT_INFO } from '@/src/constant/result';
// component
import Button from '@/src/component/UI/Button';

const Result = () => {
  const location = useLocation();
  const { name, result } = location.state || {};
  const resultRef = useRef(null);
  const { deviceInfo } = useDeviceInfo();
  const router = useInternalRouter();

  const currentResult = RESULT_INFO.find(info => info.mbti === result);
  const debouncedCopy = debounce(async () => await copyToClipboard(import.meta.env.VITE_CLIENT_BASE_URL), 500, {
    leading: true,
  });
  const downLoadImage = () => handleDownload(resultRef, `${name}_result`, deviceInfo);

  return (
    <div className="result-page">
      {currentResult ? (
        <>
          <div className="result-wrapper" ref={resultRef}>
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
                  <span key={index} className="hashTag">
                    {hashtag}
                  </span>
                ))}
              </div>
              <div className="result-content-box">
                {currentResult.content.map((content, index) => (
                  <p key={index} className="result-content-item">
                    ✅ {content}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="result-button-wrapper">
            <div className="button-row">
              <Button text="테스트 공유하기" onClick={debouncedCopy} type="result-button-style" />
              <Button text="이미지 다운로드" onClick={downLoadImage} type="result-button-style" />
            </div>
            <Button
              onClick={() => {
                router.push('/');
              }}
              text="다시하기"
              type="result-button-style"
            />
          </div>
        </>
      ) : (
        <p>해당 MBTI 유형을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Result;
