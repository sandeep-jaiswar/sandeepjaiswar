import React from 'react';
import "../../styles/_contact.scss";

function Contact() {
    const lt = '19.1871981';
    const lg = '72.863352';
    return (
        <div className='contact_container' id="contact_container">
            <div className='left_container'>
                <div className='contact_typo'>Contact Me</div>
                <p>
                    {`I’m actively seeking opportunities. However, if you have any question, don’t hesitate to use the form.`}
                </p>
                <form id='contact_form'>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Subject'></input>
                    <textarea type='text' placeholder='Message'></textarea>
                    <button className='send_btn'>Send message !</button>
                </form>
            </div>
            <div className='right_container'>
                <iframe src="https://maps.google.com/maps?q=Appapada+Market+Auto+Stand%20Dates%20Products&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{width:'100%',height:'100%',border:'0'}} allowfullscreen />
            </div>
        </div>
    )
}

export default Contact;
