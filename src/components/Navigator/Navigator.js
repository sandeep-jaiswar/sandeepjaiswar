import React from 'react';
import "../../styles/_navigator.scss";

function Navigator() {
    const linksArr = [{name : "My Skills", id : "myskill_container"},{name : "Projects", id : "work_container"},{name : "Contact", id : "contact_container"},{name : "About", id : "about_container"}];
    const socialLinks = [{
        url: "https://github.com/sandeep-jaiswar",
        imgSrc:"assets/images/github.svg",
        alt:"github"
    },
    {
        url: "https://twitter.com/FPL_TITANS",
        imgSrc:"assets/images/twitter.svg",
        alt:"twitter"
    }];
    const scrollHandle = id =>{
        document.getElementById(id).scrollIntoView();
    }
    return (
        <div className='navigator' id='navigator'>
            <div onClick={()=>scrollHandle("home_container")} className='logo'>
                <img src='assets/images/js.svg' alt="logo" width="100" height="100"></img>
            </div>
            {linksArr.map((li)=>(
                <div onClick={()=>scrollHandle(li.id)} className='nav__li'>
                    <span>{li.name}</span>
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
