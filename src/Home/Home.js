import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Welcome</h1>
            <Link to={"/Login"}>
                <button>Login</button>
            </Link>
            <Link to={"/"}>
                <button>Sign up</button>
            </Link>
            
        </div>
    )

}

export default Home;