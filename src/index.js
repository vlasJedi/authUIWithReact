import React, {useState} from "react";
import ReactDOM from "react-dom";
import Input from "./components/input";
let inputs = {
    "username": {onChange}
};
function useInputText(name) {
   let [inputTextValue, setInputTextValue] = useState("");
   inputs[name].setInputTextValue = setInputTextValue;
   console.log("index:useInputText() hooks setter assigned");
   return inputTextValue;
}
function onChange(name, evt) {
    inputs[name].setInputTextValue(evt.target.value);
    console.log("index:onChangeUsername() on change callback, calls setter");
}
ReactDOM.render(<Input captionText="Username" styleClass="username-input"
useInputText={useInputText} onChangeCall={onChange} name="username"/>, document.getElementById("root"));
