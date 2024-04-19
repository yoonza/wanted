import React from "react";

// 이 함수는 무슨 기능을 하는 함수인가 ? 
const TextComponent = ( {
    text, 
    changeTextFn,
    inputType, 
}) =>  {
    return (
        <input
        type={inputType}
        onChange={(e) => {
            changeTextFn(e);
        }}
        value={text}
        />
    );
}

export default TextComponent;