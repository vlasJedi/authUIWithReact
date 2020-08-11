import React, {useState} from "react";
import Input from "../input/input";


const userNameInputCssClass = "username-input";

let inputs = {
    "username": {onChange},
    "password": {onChange},
    "repeat-password": {onChange}
};
function useInputText(name) {
   let [inputTextValue, setInputTextValue] = useState("");
   inputs[name].setInputTextValue = setInputTextValue;
   console.log("index:useInputText() hooks setter assigned");
   return inputTextValue;
}
function onChange(name, evt) {
    inputs[name].setInputTextValue(evt.target.value);
    console.log(`index:onChange() on change callback, calls setter for ${name}`);
}
export default function SignInForm() {
    return (
    <form>
      <Input 
        captionText="Username" styleClass={userNameInputCssClass}
        useInputText={useInputText} onChangeCall={onChange} name="username"/>
      <Input 
        captionText="Password" styleClass={userNameInputCssClass}
        useInputText={useInputText} onChangeCall={onChange} name="password" type="password"/>
        <Input 
        captionText="Repeat Password" styleClass={userNameInputCssClass}
        useInputText={useInputText} onChangeCall={onChange} name="repeat-password" type="password"/>
    </form>);
}