import React from "react"
import "./Button.css";

function Button({ text, onClick, type }){
    
    const buttonClass = type == "start" ? "start-button" : "answer-button";

    return(
        <button className={buttonClass} onClick={onClick}>{테스트 시작하기}
        </button>
    );
}
export default Button;