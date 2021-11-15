import React, { useEffect, useRef } from 'react';
import "../../styles/_contact.scss";
import emailjs, { init } from 'emailjs-com';
import toast from 'react-hot-toast';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_trpvvff', 'template_v62ll4p', form.current, 'user_IBRoJ3WtOtHItu3hZnrIh')
            .then((result) => {
                console.log(result.text);
                toast.success("Message is sent.")
                document.getElementById("contact_form").reset();
            }, (error) => {
                toast.error("Something went wrong.")
                console.log(error.text);
            });
    };
    useEffect(() => {
        init("user_IBRoJ3WtOtHItu3hZnrIh");
    }, [])
    return (
        <div className='contact_container' id="contact_container">
            <div className='left_container'>
                <div className='contact_typo'>Contact Me</div>
                <p>
                    {`I’m actively seeking opportunities. However, if you have any question, don’t hesitate to use the form.`}
                </p>
                <form ref={form} onSubmit={sendEmail} id='contact_form'>
                    <input type='text' name='from_name' placeholder='Name'></input>
                    <input type='email' name='from_email' placeholder='Email'></input>
                    <input type='text' name='subject' placeholder='Subject'></input>
                    <textarea type='text' name='message' placeholder='Message'></textarea>
                    <button type="submit" className='send_btn'>Send message !</button>
                </form>
            </div>
            <div className='right_container'>
                <iframe title='my_location' src="https://maps.google.com/maps?q=Appapada+Market+Auto+Stand%20Dates%20Products&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{ width: '100%', height: '100%', border: '0' }} allowfullscreen />
            </div>
        </div>
    )
}

export default Contact;
