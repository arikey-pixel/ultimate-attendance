import "./Login.css"
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "../Service/SupabaseService";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { type, value } = e.target;
        if (type === 'text') {
          setEmail(value);
          setErrorMessage('');
        } else if (type === 'password') {
            setErrorMessage('');
          setPassword(value);
        }
      };

      const handleSubmit = async() => {
        try {
            if (email && password) {
              // Use the signInWithEmailAndPassword function
              const user = await signInWithEmailAndPassword(email, password);
              console.log("User signed in:", user);
            } else {
              throw new Error("Please provide valid inputs.");
            }
          } catch (error) {
            setErrorMessage(error.message);
            console.error("Sign-in error:", error.message);
          }
        };

    return(
        <div>
            <div className="container">
                <h2>Login</h2>
                <input type="text" placeholder="Email" value={email} onChange={handleInputChange}></input>
                <input type="password" placeholder="Password" value={password} onChange={handleInputChange}></input>
                <h4 className="error-msg">{errorMessage}</h4>
                <button type="submit" onClick={handleSubmit}>Login</button>
             </div>
        </div> 
    )
}

export default Login;