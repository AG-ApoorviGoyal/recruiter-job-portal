import React from 'react';
import { Link } from 'react-router-dom';
import {getPostedJobs} from '../../api';
import Cards from '../../Components/Cards';
import Header from '../../Components/Header';
import './index.scss';

const JobsPost = () => {
    const posts = [
        getPostedJobs()
    ]

    return (
        <>
            <Header showbutton={false} profile={true} />
            <div className='jobsPost-container-first'>
                <div className='jobsPost-container'>
                    <div className='jobsPost-home'>
                        <img src='https://image.shutterstock.com/image-vector/minimal-home-icon-web-homepage-260nw-1719939445.jpg' alt='home icon' width='13px' height='13px' />
                        <p className='jobsPost-paragraph'>Home</p>
                    </div>
                    <p className='jobsPost-mainText'>Jobs posted by you</p>
                    {posts.length !== 0 ?
                        <div className='jobsPost-cards'>
                            {posts.map((item) => (
                                <Cards heading={item.title} location={true} locationArea={item.location} view={true} />
                            ))}
                        </div> :
                        <div className='noJob-container'>
                            <img src='https://icons.veryicon.com/png/o/business/a-set-of-commercial-icons/notes-54.png' alt='notes icon' width='90px' height='90px' className='noJob-image' />
                            <p className='noJob-text'>Your posted jobs will show here!</p>
                            <Link to='/postjob'>
                                <button type='submit' className='noJob-button'>Post a Job</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className='jobsPost-container-second'>
                <div className='jobsPost-pagenation-container'>
                    <div className='jobsPost-pagenation-arrow'>
                        <img src='https://image.flaticon.com/icons/png/512/81/81037.png' alt='backward icon' width='10px' height='10px'/>
                    </div>
                    <div className='jobsPost-pagenation'>
                        1
                    </div>
                    <div className='jobsPost-pagenation-arrow'>
                    <img src='https://cdn2.iconfinder.com/data/icons/mobile-web-apps-1/32/arrow_right-512.png' alt='forward icon' width='10px' height='10px'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsPost;