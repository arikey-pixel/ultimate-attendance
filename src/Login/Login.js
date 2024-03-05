import "./Login.css"
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "../Service/SupabaseService";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errorMsg ='';

    const handleInputChange = (e) => {
        const { type, value } = e.target;
        if (type === 'text') {
          setEmail(value);
        } else if (type === 'password') {
          setPassword(value);
        }
      };

      const handleSubmit =() => {
            if(email && password){
                try{
                    signInWithEmailAndPassword(email, password);
                }
                catch(error){
                    errorMsg = 'Error with Logging in! Try again';
                }
                
            }
            else{
                alert('Please provide valid inputs.');
            }
        }

    return(
        <div>
            <div className="container">
                <h2>Login</h2>
                <input type="text" placeholder="Email" value={email} onChange={handleInputChange}></input>
                <input type="password" placeholder="Password" value={password} onChange={handleInputChange}></input>
                <h4>{errorMsg}</h4>
                <button type="submit" onClick={handleSubmit}>Login</button>
             </div>
        </div> 
    )
}



export default Login;