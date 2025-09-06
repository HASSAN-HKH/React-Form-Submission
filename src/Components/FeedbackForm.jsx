import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const[formData , setFormData] = useState({name:"" , email:"" , feedback: "" , rating:""})

    const handleChange = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
            Name: ${formData["name"]}
            Email: ${formData["email"]}
            Feedback: ${formData["feedback"]}
            Rating: ${formData["rating"]}
        `;

        const isConfirmed = confirm(`Please confirm your details:\n\n${confirmationMessage}`);

        if(isConfirmed){
            console.log('Submitting feedback:', formData);
            setFormData({
                name:"",
                email:"",
                feedback:"",
                rating:""
            })
            alert("Thank you for your valuable feedback!")
        }

    }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" placeholder='Username' name='name' value={formData["name"]} onChange={handleChange}/>
        <input type="email" placeholder='Email' name='email' value={formData["email"]} onChange={handleChange}/>
        <textarea name='feedback' placeholder='Your Feedback' value={formData["feedback"]} onChange={handleChange}></textarea>
        <p>Rate Us:</p>
        <input type="radio" name="rating" id="rad1" value={1} onChange={handleChange}/>
        <label htmlFor="rad1">1</label><br/>
        <input type="radio" name="rating" id="rad2" value={2} onChange={handleChange}/>
        <label htmlFor="rad2">2</label><br/>
        <input type="radio" name="rating" id="rad3" value={3} onChange={handleChange}/>
        <label htmlFor="rad3">3</label><br/>
        <input type="radio" name="rating" id="rad4" value={4} onChange={handleChange}/>
        <label htmlFor="rad4">4</label><br/>
        <input type="radio" name="rating" id="rad5" value={5} onChange={handleChange}/>
        <label htmlFor="rad5">5</label><br/>
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
