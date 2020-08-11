import React from "react";
import "./input.css";
function Input({captionText = "", name, styleClass, useInputText, onChangeCall, type = "text"}) {
    let inputTextValue = useInputText(name);
    return (<label>{captionText}<input name={name} value={inputTextValue} className={styleClass} type={type} 
    onChange={evt => onChangeCall(name, evt)}/></label>);
}

export default Input;