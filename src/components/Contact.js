import "../styles/Contact.css"
import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wc9nzdm', 'template_cu1qhuy', form.current, {
            publicKey: 'Wu95pAktKVf5f0mkD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

  return (
    <div className='contact'>
        <form 
        ref = {form}
        onSubmit={sendEmail}
        className='boxes'>
            <input type="text"
            name="name"
            className="name"
            placeholder="Name" required></input>

            <input type="text"
            name='email'
            className='email'
            placeholder='Email' required></input>

            <input type="text"
            name='subject'
            className='subject'
            placeholder='Subject' required></input>


            <textarea 
            type='text'
            name='message'
            className='message'
            placeholder="Message" required></textarea>
            
            <input className='send' type="submit" value="Send"></input>
        </form>
        
    </div>
  )
}

export default Contact