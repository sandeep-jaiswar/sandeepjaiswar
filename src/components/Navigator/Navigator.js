import React from 'react';
import "../../styles/_navigator.scss";

function Navigator() {
    const linksArr = ["My Skills","Work","Contact","About"];
    const socialLinks = [{
        url: "https://github.com/sandeep-jaiswar",
        imgSrc:"assets/images/github.svg",
        alt:"github"
    },
    {
        url: "https://twitter.com/FPL_TITANS",
        imgSrc:"assets/images/twitter.svg",
        alt:"twitter"
    }]
    return (
        <div className='navigator' id='navigator'>
            <div className='logo'>
                <img src='assets/images/js.svg' alt="Girl in a jacket" width="100" height="100"></img>
            </div>
            {linksArr.map((li)=>(
                <div className='nav__li'>
                    <span>{li}</span>
                </div>
            ))}
            <div className='social__tab'>
                {socialLinks.map((li)=>(
                    <img src={li.imgSrc} alt={li.alt} onClick={()=>window.open(li.url)} />
                ))}
            </div>
        </div>
    )
}

export default Navigator
