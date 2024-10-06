import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_869xss4', 'template_8bodbzg', form.current, {
        publicKey: 'voJv2WAUZiVW0L0QS',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='h-full w-fit bg-sky-300 flex flex-col justify-start p-4 gap-2 text-sm'>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your name' className='w-[200px] px-2' />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email' className='w-[200px] px-2'/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your query...' className='w-[200px] h-full resize-none outline-none font-sans pl-2'/>
      <input type="submit" value="Send" className='w-1/2 flex justify-center bg-lime-300 py-1 rounded-md hover:bg-blue-500 hover:text-xl'/>
    </form>
  );
};

export default ContactUs;