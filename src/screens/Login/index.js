import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {login} from '../../api';
import Header from '../../Components/Header';
import './index.scss';

const Login = () => {
    const history = useHistory();
    const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@((?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
    const PASSWORD_LENGTH = 6;

    const [state, setState] = useState({
        email: '',
        password: ''
    });

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
        if (state.email === '' || state.password === '') {
            setError({ isError: true, message: 'All fields are required' })
            return;
        }
        else {
            if (validateEmail(state.email)) {
                if (state.password.length < PASSWORD_LENGTH) {
                    setError({ isError: true, message: 'Password should be of 6 characters' })
                    return;
                }
            }
            else {
                setError({ isError: true, message: 'Incorrect email address or password' })
                return;
            }
        }
        login(state.email,state.password);
        history.push('/Jobspost');
    }

    return (
        <>
            <Header showbutton={false} profile={false} />
            <div className='login-container-first'>
                <div className='login-container'>
                    <p className='login-main-text'>Login</p>
                    <div>
                        <label for='email' className='login-label'>Email address</label>
                        <input type='email'
                            placeholder='Enter your email'
                            value={state.email}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, email: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='login-input' />
                    </div>
                    <div className='login-password-styles'>
                        <div>
                            <label for='password' className='login-label'>Password</label>
                            <input type='password'
                                placeholder='Enter your password'
                                value={state.password}
                                onFocus={() => setError({ isError: false, message: '' })}
                                onChange={(e) => setState({ ...state, password: e?.target.value })}
                                style={{ borderColor: error.isError ? '#FF333380' : null }}
                                className='login-input' />
                        </div>
                        <div>
                            <Link to='/forgotpassword' style={{textDecoration:'none'}}>
                            <p className='login-label-second'>Forgot your password?</p>
                            </Link>
                        </div>
                    </div>
                    {error.isError && <p className='login-error-text'>{error.message}</p>}
                    <button type='submit' className='login-button' onClick={() => onSubmit()}>Login</button>
                    <div className='login-text-button'>
                        <span>New to MyJobs?</span>
                        <Link to='/signup' style={{textDecoration:'none'}}>
                            <span className='login-text-blue'>Create an account</span>
                        </Link>
                    </div>
                </div>
                <div className='login-container-second'>
                </div>
            </div>
        </>
    )
}

export default Login;