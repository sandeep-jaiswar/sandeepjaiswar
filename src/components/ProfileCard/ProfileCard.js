import React from 'react';
import "../../styles/_profile.scss";

function ProfileCard(props) {
    const {role,company,duration,desc} = props;
    return (
        <div className='profile_card'>
            <div className='job_role'>{role}</div>
            <div className='company_name'>{company}</div>
            <div className='duration'>{duration}</div>
            <div className='desc'>{desc}</div>
        </div>
    )
}

export default ProfileCard
