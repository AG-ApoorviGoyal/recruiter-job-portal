import React, { useCallback } from 'react';
import './index.scss';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: '-20%',
        border: '1px solid #FFFFFF',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)',
    },
};

function ViewModal(props) {
    const handleOnClick = useCallback((flag) => () => props.setVisibility(flag), [props.visibility])

    const applicants = [
        // {
        //     name: 'Eliza Lucas',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // },
        // {
        //     name: 'Nick Gordon',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // },
        // {
        //     name: 'Matthew Pierce',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // },
        // {
        //     name: 'Emma Green',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // },
        // {
        //     name: 'Roger Reid',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // },
        // {
        //     name: 'Janet Cooper',
        //     email: 'abc123@email.com',
        //     skills: 'Coding, designing, graphics, website, app ui'
        // }
    ]

    return (
        <div>
            <Modal
                isOpen={props.visibility}
                onRequestClose={handleOnClick(!props.visibility)}
                style={customStyles}
            >
                <div className='viewModal-container'>
                    <div className='viewModal-heading'>
                        <p className='viewModal-heading-text'>Applicants for this job</p>
                        <img src='https://p.kindpng.com/picc/s/80-805570_close-button-comments-clear-background-transparent-black-x.png' alt='Close icon' width='10px' height='10px' onClick={() => props.setVisibility(false)} className='viewModal-image' />
                    </div>
                    <hr />
                    <div className='viewModal-text'>
                        {applicants.length !== 0 ? `Total ${applicants.length} applications` : `${applicants.length} applications`}
                    </div>
                    <div className='viewModal-cards-background'>
                        {applicants.length !== 0 ? (
                            applicants.map(item => (
                                <div className='viewModal-cards'>
                                    <div className='viewModal-heading'>
                                        <div className='viewModal-circle'>
                                            <p className='viewModal-circle-text'>{item.name[0]}</p>
                                        </div>
                                        <div className='viewModal-details'>
                                            <p className='viewModal-name'>{item.name}</p>
                                            <p className='viewModal-email'>{item.email}</p>
                                        </div>
                                    </div>
                                    <div className='viewModal-details-second'>
                                        <p className='viewModal-skills'>Skills</p>
                                        <p className='viewModal-skills-text'>{item.skills}</p>
                                    </div>
                                </div>
                            ))) : 
                            <div className='viewModal-noJob-container'>
                                <img src='https://icon-library.com/images/applicant-icon/applicant-icon-16.jpg' alt='Applicant icon' width='90px' height='90px' className='viewModal-noJob-image'/>
                                <p className='viewModal-noJob-text'>No application available!</p>
                            </div>}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ViewModal;