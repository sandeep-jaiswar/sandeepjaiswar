import React from 'react';
import '../../styles/_myskill.scss';
import ProfileCard from '../ProfileCard/ProfileCard';

/**
 * Description
 * @return {any}
 */
function Myskill() {
  const skillArray = [
    {skill: 'React JS', scale: `80`, color: `#2e8b57 `},
    {skill: 'JavaScript', scale: `70`, color: `#FFC400`},
    {skill: 'HTML', scale: `70`, color: `#FD1056`},
    {skill: 'CSS', scale: `75`, color: `#D26CD5`},
    {skill: 'Redux', scale: `65`, color: `#08FDD8`},
  ];
  const jobDtls = [
    {
      key: 1,
      role: 'Senior Software Engineer',
      company: 'Justdial Ltd',
      duration: '2021-Present',
      desc: 'Migrated the codebase from angularjs to reactjs framework and also responsible for solving high priority critical bugs',
    },
    {
      key: 2,
      role: 'Senior Systems Engineer',
      company: 'Infosys Limited',
      duration: '2018-2021',
      desc: 'Analyzed the defects and performed root cause analysis and provided solutions',
    },
  ];
  const getMarkup = (skill, scale, color) => {
    return (
      <>
        <div className="skill_row">
          <div className="skill_name">{skill}</div>
          <div className="scaling_line">
            <div
              className="colored_line"
              style={{width: `${scale}%`, background: `${color}`}}
            />
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="myskill_container" id="myskill_container">
      <div id="description-container" className="description-container">
        <div className="myskill_typo">
          <span>{`Skills &`}</span>
          <br />
          <span>{`Experience`}</span>
        </div>
        <p>
          {`My journey started as front end developer nearly 3 years ago and since then, I’ve done remote work for multi-national company and for startup,and collaborated with talented people to create web products for both business and consumer use.`}
        </p>
        <p>
          {`I create successful responsive websites that are fast, easy to use, and built with best practices.
            The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, features, bug fixing and coding interactive layouts.`}
        </p>
        <p>
          {` I  have hands-on industry experience with popular libraries like ReactJS, Redux.`}
        </p>
      </div>
      <div className="skillset-container">
        {skillArray.map((cur) => getMarkup(cur.skill, cur.scale, cur.color))}
        {jobDtls.map((cur) => (
          <ProfileCard key={cur.key} {...cur} />
        ))}
      </div>
    </div>
  );
}

export default Myskill;
