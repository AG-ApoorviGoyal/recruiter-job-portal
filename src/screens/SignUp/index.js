import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import {signup} from '../../api';
import Header from '../../Components/Header';
import './index.scss';

const SignUp = () => {
    const history = useHistory();
    const EMAIL_REGEX = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@((?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

    const [state, setState] = useState({
        fullName: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
        skills: ''
    })

    const [nameError, setNameError] = useState({
        isError: false,
        message: ''
    })

    const [emailError, setEmailError] = useState({
        isError: false,
        message: ''
    })

    const [passwordError, setPasswordError] = useState({
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
        if (state.fullName === '') {
            setNameError({ isError: true, message: 'The fied is mandatory' })
            return;
        }

        if (state.email === '') {
            setEmailError({ isError: true, message: 'The fied is mandatory' })
            return;
        }
        else if (!validateEmail(state.email)) {
            setEmailError({ isError: true, message: 'Invalid email address' })
            return;
        }

        if (state.createPassword === '' || state.confirmPassword === '') {
            setPasswordError({ isError: true, message: 'The fied is mandatory' })
            return;
        }
        else if (state.createPassword !== state.confirmPassword) {
            setPasswordError({ isError: true, message: 'Password do not match' })
            return;
        }
        signup(state.email,state.createPassword,state.confirmPassword,state.fullName,state.skills);
        history.push('/login');
    }

    return (
        <>
            <Header showbutton={false} profile={false} />
            <div className='signup-container-first'>
                <div className='signup-container'>
                    <p className='signup-main-text'>Signup</p>
                    <p className='signup-paragraph-text'>I'm a*</p>
                    <div className='signup-button-styles'>
                        <button className='signup-first-button'>
                            <img src='https://icon-library.com/images/recruiter-icon/recruiter-icon-4.jpg' alt='Recruiter Icon' width='20px' height='20px' className='signup-button-image' />
                            <p className='signup-button-image-text'>Recruiter</p>
                        </button>
                        <button className='signup-second-button'>
                            <img src='https://image.flaticon.com/icons/png/512/1628/1628566.png' alt='Candidates Icon' width='20px' height='20px' className='signup-button-image' />
                            <p className='signup-button-image-text'>Candidates</p>
                        </button>
                    </div>
                    <div className='signup-details'>
                        <label for='full_Name' className='signup-label'>Full Name*</label>
                        <input type='text'
                            placeholder='Enter your Full Name'
                            value={state.fullName}
                            onFocus={() => setNameError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, fullName: e.target.value })}
                            style={{ borderColor: nameError.isError ? '#FF333380' : null }}
                            className='signup-input' />
                        {nameError.isError && <p className='signup-error-text'>{nameError.message}</p>}
                    </div>
                    <div className='signup-details'>
                        <label for='email' className='signup-label'>Email*</label>
                        <input type='email'
                            placeholder='Enter your Email'
                            value={state.email}
                            onFocus={() => setEmailError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            style={{ borderColor: emailError.isError ? '#FF333380' : null }}
                            className='signup-input' />
                        {emailError.isError && <p className='signup-error-text'>{emailError.message}</p>}
                    </div>
                    <div className='signup-details-second'>
                        <div className='signup-details'>
                            <label for='createPassword' className='signup-label'>Create Password*</label>
                            <input type='password'
                                placeholder='Enter your Password'
                                value={state.createPassword}
                                onFocus={() => setPasswordError({ isError: false, message: '' })}
                                onChange={(e) => setState({ ...state, createPassword: e.target.value })}
                                style={{ borderColor: passwordError.isError ? '#FF333380' : null }}
                                className='signup-input-second' />
                        </div>
                        <div className='signup-details'>
                            <label for='confirmPassword' className='signup-label'>Confirm Password*</label>
                            <input type='password'
                                placeholder='Enter your Password'
                                value={state.confirmPassword}
                                onFocus={() => setPasswordError({ isError: false, message: '' })}
                                onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}
                                style={{ borderColor: passwordError.isError ? '#FF333380' : null }}
                                className='signup-input-second' />
                            {passwordError.isError && <p className='signup-error-text-second'>{passwordError.message}</p>}
                        </div>
                    </div>
                    <div className='signup-details'>
                        <label for='skills' className='signup-label'>Skills</label>
                        <input type='text'
                            placeholder='Enter comma separated Skills'
                            value={state.skills}
                            onChange={(e) => setState({ ...state, skills: e.target.value })}
                            className='signup-input' />
                    </div>
                    <button type='submit' className='signup-button' onClick={() => onSubmit()}>Signup</button>
                    <div className='signup-text-button'>
                        <span>Have an account?</span>
                            <span className='signup-text-blue'>Login</span>
                    </div>
                </div>
            </div>
            <div className='signup-container-second'>
            </div>
        </>
    )
}

export default SignUp;