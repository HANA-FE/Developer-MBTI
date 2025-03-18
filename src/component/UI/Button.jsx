import React from 'react';
import '../../../style/index.css';

function Button({ text, onClick, type }) {
  return (
    <button className={type} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
