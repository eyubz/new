import React from 'react';
import img from './images/p1.jpg';
import img2 from './images/p2.jpg';
import img1 from './images/p3.jpg';
const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Abebe Kebede',
      feedback: "A service well-suited for a nation like ours.",
      image: img,
    },
    {
      id: 2,
      name: 'Hiwot Alemu',
      feedback: "An evolving innovation to address the pressing challenge of electricity shortage.",
      image: img1,
    },
    {
      id: 3,
      name: 'Almemu Abebe',
      feedback: "A forward-thinking approach to sustainability and resource reusability.",
      image: img2,
    },
  ];

  return (
    <div>
    <div className="centered-container">
      <h3 className="header-title">Testimonials</h3>
      <p className="header-subtitle">Hear from our satisfied customers.</p>
    </div>
    <div className="testimonials-container" style={{marginBottom: "200px"}}>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
            {console.log(testimonial.image)}
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-feedback" style={{marginLeft:'0px', textAlign:'center'}}>{testimonial.feedback}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
