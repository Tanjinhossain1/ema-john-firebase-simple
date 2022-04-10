import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setError] = useState('');
    const [createUserWithEmailAndPassword, user,loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/login')
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('password not matched')
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, password)


    }
    return (
        <div>
            <div className='login-container'>
                <div className='form-container'>
                    <div>
                        <h2 className='form-title'>Sign Up</h2>
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email" id="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePassword} type="password" name="password" id="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">confirm-password</label>
                                <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" />
                            </div>
                            <p style={{ color: 'red' }}>{errors}</p>
                            <p style={{color: 'red'}}>{error?.message.slice(22, 42)}</p>
                            <input className='submit-input' type="submit" value="Sign Up" />
                        </form>
                        <p>
                            Already have an account?<Link to='/login'>Login</Link>
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
        </div>
    );
};

export default SignUp;