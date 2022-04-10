import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/shop";

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from);
    }
    const signInEmailPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={signInEmailPassword}>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" />
                        </div>
                        <p>{error?.message.slice(22, 42)}</p>
                        {loading && <p>Loading...</p>}
                        <input className='submit-input' type="submit" value="Login" />
                    </form>
                    <p>
                        new to ema-john?<Link to='/signup'>Create New Account</Link>
                    </p>
                    <div className='or-container'>
                        <p className='or-left'></p>
                        <p>or</p>
                        <p className='or-right'></p>
                    </div>
                    <div>
                        <button className='google-button'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_7bMO9d6c7f-DPHuqUinDwpqNF00jKnrQ&usqp=CAU" alt="" /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;