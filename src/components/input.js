import React from "react";
function Input({captionText = "", name, styleClass, useInputText, onChangeCall}) {
    let inputTextValue = useInputText(name);
    return (<label>{captionText}<input name={name} value={inputTextValue} className={styleClass} type="text" 
    onChange={evt => onChangeCall(name, evt)}/></label>);
}

export default Input;