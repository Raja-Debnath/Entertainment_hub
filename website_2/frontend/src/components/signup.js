import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom"
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  // const [password2,setPassword2]=useState("");
  const Navigate = useNavigate();

  const collectData = async () => {
    console.warn(name, email, password1);
    let result = await fetch("http://127.0.0.1:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    console.warn(result);
    if (result){
      Navigate('/')
    }

  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text "
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputbox"
        type="text "
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputbox"
        type="text "
        placeholder="Enter Password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />

      {/* <input className="inputbox" type="text " placeholder="Confirm Password"
            value={password2} onChange={(e)=>setPassword2(e.target.value)}/> */}

      <button onClick={collectData} className="signup" type="button ">
        signup{" "}
      </button>
    </div>
  );
};
export default SignUp;
