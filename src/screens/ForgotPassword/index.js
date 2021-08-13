import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {getResetPasswordToken} from '../../api';
import Header from '../../Components/Header';
import './index.scss';

const ForgotPassword = () => {
    const history = useHistory();
    const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@((?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

    const [state, setState] = useState({
        email: ''
    })

    const [token,setToken] = useState(null);

    const [error, setError] = useState({
        isError: false,
        message: ''
    })

    const validateEmail = (input) => {
        if (input.match(EMAIL_REGEX)) {
            return true;
        }
        else {
            return false;
        }
    }

    const onSubmit = () => {
        if (state.email === '') {
            setError({ isError: true, message: 'The fied is mandatory' })
        }
        else if (!validateEmail(state.email)) {
            setError({ isError: true, message: 'Invalid email address' })
        }
        history.push('/resetpassword');
    }

    return (
        <>
            <Header showbutton={true} profile={false} />
            <div className='forgotPassword-container-first'>
                <div className='forgotPassword-container'>
                    <p className='forgotPassword-main-text'>Forgot your Password?</p>
                    <p className='forgotPassword-paragraph-text'>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                    <div className='forgotPassword-details'>
                        <label for='email' className='forgotPassword-label'>Email address</label>
                        <input type='email'
                            placeholder='Enter your email'
                            value={state.email}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, email: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='forgotPassword-input' />
                        {error.isError && <p className='forgotPassword-error-text'>{error.message}</p>}
                    </div>
                        <button type='submit' className='login-button' onClick={() => onSubmit()}>Submit</button>
                </div>
            </div>
            <div className='forgotPassword-container-second'>
            </div>
        </>
    )
}

export default ForgotPassword;