import React, { useState } from 'react';
import Header from '../../Components/Header';
import './index.scss';

const PostJob = () => {
    const [state, setState] = useState({
        title: '',
        description: '',
        location: ''
    })

    const [error, setError] = useState({
        isError: false,
        message: ''
    })

    const onSubmit = () => {
        if (state.title === '' || state.description === '' || state.location === '') {
            setError({
                isError: true,
                message: 'All fields are mandatory'
            })
        }
    }

    return (
        <>
            <Header showbutton={false} profile={true} />
            <div className='postJob-container-first'>
                <hr className='postJob-border-line'/>
                <div className='postJob-home'>
                    <img src='https://image.shutterstock.com/image-vector/minimal-home-icon-web-homepage-260nw-1719939445.jpg' alt='home icon' width='13px' height='13px' />
                    <p className='postJob-paragraph'>Home{">"}Post a Job</p>
                </div>
                <div className='postJob-container'>
                    <p className='postJob-main-text'>Post a Job</p>
                    <div>
                        <label for='title' className='postJob-label'>Job Title*</label>
                        <input type='text'
                            placeholder='Enter job title'
                            value={state.title}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, title: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='postJob-input' />
                    </div>
                    <div>
                        <label for='description' className='postJob-label'>Description*</label>
                        <textarea type='text'
                            placeholder='Enter job description'
                            value={state.description}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, description: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='postJob-input-second' />
                    </div>
                    <div>
                        <label for='location' className='postJob-label'>Location*</label>
                        <input type='text'
                            placeholder='Enter location'
                            value={state.location}
                            onFocus={() => setError({ isError: false, message: '' })}
                            onChange={(e) => setState({ ...state, location: e?.target.value })}
                            style={{ borderColor: error.isError ? '#FF333380' : null }}
                            className='postJob-input'/>
                    </div>
                    {error.isError && <p className='postJob-error-text'>{error.message}</p>}
                    <button type='submit' className='postJob-button' onClick={() => onSubmit()}>Post</button>
                </div>
            </div>
            <div className='postJob-container-second'></div>
        </>
    )
}

export default PostJob;