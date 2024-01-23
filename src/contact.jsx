import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Testimonials from './testimonals';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import React, { useState } from 'react';

// ... (previous imports)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for choosing us, ${formData.name}! We will contact you soon.`);
    
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      comment: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>
          Email:
        </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <label>
          Phone:
        </label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        <br />
        <label>
          Comment:
        </label>
        <textarea name="comment" value={formData.comment} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// ... (rest of the code)


const Header = () => {
  const navigate = useNavigate();
  const services = () => {
    navigate('/services');
  };
  return (
    <div className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo">G-2</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="contact-container">
        <h1>MEET THE TEAM</h1>
        <h2>Let's Lighten Up The Generation Together!!!</h2>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <div>
      <main>
        <Header/>
        <br/><br/><br/><br/>
        <hr className="bold-line"/>
        <ContactForm/>
        <hr className="bold-line"/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </main>
    </div>
  );
}
export default Contact