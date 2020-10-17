import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formMessage, setMessage] = useState('')
    const history = useHistory()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, rediret to homepage
                history.push('/')
            })
            .catch((err) => setMessage(err.message))
    }

    const signInWithDemo = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword("test@gmail.com", "123456")
            .then((auth) => {
                // logged in, rediret to homepage
                history.push('/')
            })
            .catch((err) => setMessage(err.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirect to home page
                history.push('/')
            })
            .catch((err) => setMessage(err.message))
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
                            type="email"
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
                            required
                        />
                    </label>
                    <br />
                    <input type="submit" value="Sign In" id="login__signInButton"
                        onClick={signIn} />
                    <input type="submit" value="Sign In as Demo User" id="login__signInButton"
                        onClick={signInWithDemo} />
                </form>
                <p>This is a AMAZON CLONE.</p>
                <button className="login__registerButton" onClick={register}>Create Amazon Account</button>
            </div>
            <br />
            <p id="login__message">{formMessage}</p>
        </div >
    )
}

export default Login
