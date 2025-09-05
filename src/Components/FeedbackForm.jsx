import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling
 
const FeedbackForm = () => {

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" placeholder='Username' name='Name'/>
        <input type="email" placeholder='Email' name='Email'/>
        <textarea name='Feedback' placeholder='Your Feedback'></textarea>
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
