import React, { useEffect, useState } from 'react';

function Contact() {
  const [mailHref, setMailHref] = useState('');

  useEffect(() => {
    const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    if (isMobile()) {
      setMailHref('mailto:shrihariss29@gmail.com?');
    } else {
      setMailHref('https://mail.google.com/mail/?view=cm&fs=1&to=shrihariss29@gmail.com');
    }
  }, []);

  return (
    <div className="contact">
    <h3>Contact me : </h3>
      <a id="mail" href={mailHref} target={mailHref.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
        Mail
      </a> 
      <a href="https://github.com/shrihariss29" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/shrihari-sriram-364559223/" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="https://www.instagram.com/shrihari.29/" target="_blank" rel="noreferrer">Instagram (temporarily disabled right now) </a>
    </div>
  );
}

export default Contact;
