import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Register() {
    const history = useHistory();
    const [err, setErr] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const user = { name, email, password, cpassword };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        })

        const data = await res.json();
        if(Object.keys(data).length === 1){
            setErr(data.error);
        }else{
            setErr("");
            history.push("/login")
        }
    }
    return (
        <div className = 'body'>
        <div className="container main">
            <h4 id="error">{err}</h4>
            <div className="title">Registration</div>
            <div className="content">
                <form method="POST">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" name="name" placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" name="email" placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" name="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" name="cpassword" placeholder="Confirm Password"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="SignUp" name="register" onClick={PostData} />
                    </div>
                    <NavLink to="/login">Login</NavLink>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register