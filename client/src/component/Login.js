import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = res.json();
        if (res.status === 400 || !data) {
            setMsg('Invalid Email or Password')
        } else if (res.status === 401) {
            setMsg('All field are mandatory')
        }
        else {
            window.alert("Login Successfull")
            history.push('/')
        }
    }

    return (
        <div className="body">
            <div className="container main">
                <h3 id="err">{msg}</h3>
                <div className="title">Login</div>
                <div className="content">
                    <form method="POST">
                        <div className="user-details">
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
                        </div>
                        <div className="button">
                            <input type="submit" value="Login"
                                onClick={loginUser}
                            />
                        </div>
                    </form>
                </div>
                <NavLink to="/register">SignUp</NavLink>
            </div>
        </div>
    )
}

export default Login
