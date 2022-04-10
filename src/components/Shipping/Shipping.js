import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [user] = useAuthState(auth);

   
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleNumber = (event) => {
        setNumber(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(name, number)
    }
    return (
        <div>
       <div>
            <div className='login-container'>
                <div className='form-container'>
                    <div>
                        <h2 className='form-title'>add Shipping </h2>
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input readOnly value={user?.email} type="email" name="email" id="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input  onBlur={handleName} type="text" name="password" id="" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Number</label>
                                <input onBlur={handleNumber} type="number" name="confirm-password" id=""  required/>
                            </div>
                            <input className='submit-input' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Shipping;