import React from 'react';

const Contact = () => {
  return (
    <div className='contact-info'>
      <h2>Contact Information</h2>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:tejaswi.manchineella@gmail.com">tejaswi.manchineella@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tejaswi-manchineella/" target="_blank">tejaswi-manchineella</a>
        </li>
        {/* <li>
          <strong>Phone:</strong> +1 (616) 228-5921
        </li> */}
        <li>
          <strong>GitHub:</strong> manchint
        </li>
      </ul>
    </div>
  );
};

export default Contact;
