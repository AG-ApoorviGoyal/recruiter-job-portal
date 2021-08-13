import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import './index.scss';

const ResetPassword = (props) => {
    const history = useHistory();
    const [state, setState] = useState({
        newPassword: '',
        confirmNewPassword: ''
    })

    const [error, setError] = useState({
        isError: false,
        message: ''
    })

    const onSubmit = () => {
        if (state.newPassword === '' || state.confirmNewPassword === '') {
            setError({ isError: true, message: 'The fied is mandatory' })
        }
        else if (state.newPassword !== state.confirmNewPassword) {
            setError({ isError: true, message: 'Passwords do not match' })
        }
        history.push('/login');
    }

    console.log('@@',props);

    return (
        <>
            <Header showbutton={true} profile={false} />
            <div className='resetPassword-container-first'>
                <div className='resetPassword-container'>
                    <p className='resetPassword-main-text'>Reset Your Password</p>
                    <p className='resetPassword-paragraph-text'>Enter your new password below.</p>
                    <div className='resetPassword-details'>
                        <label for='newPassword' className='resetPassword-label'>New Password</label>
                        <input type='password'
                            placeholder='Enter your password'
                            value={state.newPassword}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, newPassword: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='resetPassword-input' />
                    </div>
                    <div className='resetPassword-details'>
                        <label for='confirmNewPassword' className='resetPassword-label'>Confirm New Password</label>
                        <input type='password'
                            placeholder='Enter your password'
                            value={state.confirmNewPassword}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, confirmNewPassword: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='resetPassword-input' />
                        {error.isError && <p className='resetPassword-error-text'>{error.message}</p>}
                    </div>
                        <button type='submit' className='resetPassword-button' onClick={() => onSubmit()}>Submit</button>
                </div>
            </div>
            <div className='resetPassword-container-second'>
            </div>
        </>
    )
}

export default ResetPassword;