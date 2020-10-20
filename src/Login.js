import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (e) => {
        e.preventDefault()
        // TODO Firebase
    }

    const register = (e) => {
        e.preventDefault()
        // TODO Firebase
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://www.clickbank.com/wp-content/uploads/2016/05/amazon_logo.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <label htmlFor="">
                        <h5>E-mail</h5>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Sign In" id="login__signInButton"
                        onClick={signIn} />
                </form>
                <p>This is a FAKE AMAZON.</p>
                <button className="login__registerButton" onClick={register}>Create Amazon Account</button>
            </div>
        </div >
    )
}

export default Login
