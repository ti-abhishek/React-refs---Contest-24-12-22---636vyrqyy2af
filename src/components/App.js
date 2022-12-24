import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here
  const [value2, SetValue2] = useState("");
  const [value, SetValue] = useState("");
  const newRef = useRef(null);

  const settingValue = () => {
    SetValue2(value);
    SetValue("");
  }

  const handle = () => { }

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={value} ref={newRef} onChange={}/><br/>
      Password
      <input id="inputPassword" type="text" value={} ref={} onChange={}/><br/>
      <button id="submitButton" onClick={handle}>Submit</button><br/>
      <p id="emailText">Your Email : {}</p>
      <p id ="passwordText">Your Password : {}</p>
      
    </div>
  )
}


export default App;
