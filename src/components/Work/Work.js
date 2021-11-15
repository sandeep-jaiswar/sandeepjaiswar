import React, { useRef } from 'react';
import "../../styles/_work.scss";

function Work() {
    const projectArr= [{
        giturl: 'https://github.com/pesto-students/little-tags-codeword7 ',
        website: 'https://naughty-mccarthy-84f156.netlify.app/',
        img:"assets/images/littletag.png" ,
        title: 'Little Tags - Online Shopping System',
        desc: `Cart, Payment, Authentication, Orders, Google and Facebook Sign In, Search, Product Listing`,
        tech: 'HTML, CSS, JavaScript, React, Redux, Firebase'
    }];
    const ref= useRef();
    const imgref= useRef();
    const showbtn =()=>{
        ref.current.style.opacity="1";
        imgref.current.style.opacity="0.3";
    }
    const hidebtn =()=>{
        ref.current.style.opacity="0";
        imgref.current.style.opacity="1";
    }
    return (
        <div className='work_container' id="work_container">
            {projectArr.map((cur) => (
                <div className='project_card'>
                    <div className='dtls_container'>
                        <div className='work_typo'>
                            <span>{`Personal`}</span><br />
                            <span>{`Projects`}</span>
                        </div>
                        <p className='title'>{cur.title}</p>
                        <div className='desc'>Features : <br/><span>{cur.desc}</span></div>
                        <div className='tech'>Technology Stack : <br/><span> {cur.tech}</span></div>
                    </div>
                    <div className='img_container' onMouseEnter={showbtn} onMouseLeave={hidebtn}>
                        <img ref={imgref} alt="live_preview" src={cur.img}/>
                        <button onClick={()=>window.open(`${cur.website}`)} ref={ref} className='view_prj'>View Project</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Work
