import React from 'react';
import '../../style/index.css';
import Button from '../component/UI/Button';
import Cat from './src/image/homeCat.png';
import Screen from './src/image/home.screen.png';

function Home() {
  return (
    <div className="First">
      <div style={{ position: 'relative' }}>
        <div className="title1">
          <p>개발놈 TEST</p>
        </div>

        <div className="title2">
          <p>당신은 어떤 개발 동물일까요?</p>
        </div>

        <div className="cat">
          <img src={Screen} alt="Cat" />
        </div>

        <div className="screen">
          <img src={Cat} alt="screen" />
        </div>

        <div className="Home-button">
          <Button onClick={() => {}} type="start-button" text="테스트 시작하기" />
        </div>
      </div>
    </div>
  );
}

export default Home;
