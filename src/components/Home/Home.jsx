import React from 'react';
import '../../styles/_home.scss';
import Moon from '../Moon/Moon';
import Typing from 'react-typing-animation';

/**
 * Description
 * @return {any}
 */
function Home() {
  const ele = Array.from(Array(2222).keys());

  return (
    <div className="home_container" id="home_container">
      {ele.map((cur) => (
        <span key={cur}></span>
      ))}
      <Moon />
      <Typing className="typing_container">
        <span>{'Hi,'}</span>
        <br />
        <span>{'I’m Sandeep,'}</span>
        <br />
        <span>{'front end developer'}</span>
      </Typing>
      <img
        src="assets/images/down.svg"
        alt="downArrow"
        height="40"
        width="40"
        className="downarrow"
        id="downarrow"
      />
    </div>
  );
}

export default Home;
