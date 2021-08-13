import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-text'>
                <span className='header-text-white'>My</span><span className='header-text-blue'>Jobs</span>
            </div>
            {
                props.showbutton ?
                    <Link to='/login' style={{textDecoration:'none'}}>
                        <button type='submit' className='header-button'>
                            <p className='header-button-text'>Login/SignUp</p>
                        </button>
                    </Link>
                    : ''
            }

            {
                props.profile ?
                    <div className='header-profile-container'>
                        <span className='header-profile-text'>Post a Job</span>
                        <div className='header-profile-button header-profile-button-text'>R</div>
                        <button type='submit' className='header-profile-image-button'>
                            <img src='https://icons.iconarchive.com/icons/iconsmind/outline/512/Arrow-Down-2-icon.png' alt='downward arrow' className='header-profile-image' />
                        </button>
                    </div> : ''
            }

            <hr className='header-border-line' />
        </div>
    )
}

export default Header;