import React from 'react';
import '../../../style/index.css';

function Home(){
  return(
<div>
  <div className="title1">
    <p>개발놈 TEST</p>
  </div>

  <div className="title2">
    <p>당신은 어떤 개발 동물일까요?</p>
  </div>
  
  <div className="cat">
  <img src= "Cat.png" alt="Cat"/>
  </div>
  
  <div className="screen">
  <img src= "screen.png" alt="screen"/>
  </div>

</div>
  );
}

export default Home;
