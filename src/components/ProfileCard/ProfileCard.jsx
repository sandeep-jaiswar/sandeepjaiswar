import React from 'react';
import '../../styles/_profile.scss';
import PropTypes from 'prop-types';

/**
 * Description
 * @param {any} props
 * @return {any}
 */
function ProfileCard(props) {
  const {role, company, duration, desc} = props;
  return (
    <div className="profile_card">
      <div className="job_role">{role}</div>
      <div className="company_name">{company}</div>
      <div className="duration">{duration}</div>
      <div className="desc">{desc}</div>
    </div>
  );
}

ProfileCard.propTypes = {
  role: PropTypes.string,
  company: PropTypes.string,
  duration: PropTypes.string,
  desc: PropTypes.string,
};

export default ProfileCard;
