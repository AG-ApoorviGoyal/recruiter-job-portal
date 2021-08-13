import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards'
import Header from '../../Components/Header';
import './index.scss'

const Dashboard = (props) => {
    return (
        <div>
            <Header showbutton={true} profile={false} />
            <div className='dashboard-container'>
                <div className='dashboard-text'>
                    <span className='dashboard-text-white'>Welcome to My</span><span className='dashboard-text-blue'>Jobs</span>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <button type='submit' className='dashboard-button'>
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className='dashboard-image'>
                    <img src='https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg' alt='Office Girl' className='dashboard-image-styles' />
                </div>
            </div>
            <div className='dashboard-secondContainer'>
                <p className='dashboard-card-heading-first'>Why Us</p>
                <div className='dashboard-cards-container'>
                    <Cards heading='Get More Visibility' location={false} locationArea='' view={false} />
                    <Cards heading='Organize Your Candidates' location={false} locationArea='' view={false} />
                    <Cards heading='Verify Their Abilities' location={false} locationArea='' view={false} />
                </div>
                {props.images ? <>
                    <p className='dashboard-card-heading-second'>Companies Who Trust Us</p>
                    <div className='dashboard-card-image-first'>
                        <div className='dashboard-image1'>
                            <img src='https://leafletgroup.com/wp-content/uploads/24.png' alt='solaytic' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://getvectorlogo.com/wp-content/uploads/2019/03/velocity-by-atlona-vector-logo.png' alt='velocity' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://dcassetcdn.com/design_img/2446771/212881/212881_12829858_2446771_617af0fc_image.jpg' alt='goldline' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://image.flaticon.com/icons/png/512/39/39206.png' alt='atos' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://www.vectorkhazana.com/assets/images/products/Toyota_Etios_Liva_logo,.jpg' alt='liva' className='dashboard-image-styles-second' />
                        </div>
                    </div>
                    <div className='dashboard-card-image-second'>
                        <div className='dashboard-image1'>
                            <img src='https://dcassetcdn.com/design_img/2446771/212881/212881_12829858_2446771_617af0fc_image.jpg' alt='goldline' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://www.logopik.com/wp-content/uploads/edd/2018/06/Idea-Logo-Vector-Free-Download.png' alt='idea' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://www.vectorkhazana.com/assets/images/products/Toyota_Etios_Liva_logo,.jpg' alt='liva' className='dashboard-image-styles-second' />
                        </div>
                        <div className='dashboard-image1'>
                            <img src='https://getvectorlogo.com/wp-content/uploads/2019/03/velocity-by-atlona-vector-logo.png' alt='velocity' className='dashboard-image-styles-second' />
                        </div>
                    </div>
                </> : ''}
            </div>
        </div>
    )
}

export default Dashboard;