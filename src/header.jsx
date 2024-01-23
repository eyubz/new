import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Testimonials from './testimonals';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
      <div className="background-container">
        <h1>Introducing the Future of Productivity</h1>
        <h2>Discover how our service can revolutionize your life.</h2>
        <div className="button-container">
          <button className="header-button btn1" onClick={services}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;


export function Content() {
  const navigate = useNavigate();
  const services = () => {
    navigate('/services');
  };
  return (
    <div>
    <div className="flex-container" style={{marginTop: "100px", marginBottom: "100px"}}>
      <div className="content">
        <h3> <AiOutlineQuestionCircle size={30} className='question' />Have you ever considered the destination of wastewater from tall buildings? </h3>
        <p>
          Our country is currently witnessing a surge in tall building constructions, indicative of the developmental 
          progress we are experiencing. With this development, the demand for water distribution is on the rise, leading 
          to a substantial increase in the generation of wastewater from these buildings. This wastewater is typically directed 
          into underground systems or storage facilities before being released into water bodies, impacting the environment in 
          various ways. This poses a pressing issue that requires attention and resolution.
        </p>
      </div>
      <div className="img-container">
      </div>
    </div>
    <hr className="bold-line"/>
    <div className="flex-container" style={{marginTop: "100px", marginBottom: "100px"}}>
      <div className="img-container img1"> </div>
    <div className="content">
        <h3> <AiOutlineQuestionCircle size={30} className='question' />How about addressing the current electricity shortage we are experiencing? </h3>
        <p>
        The pronounced electricity shortage we confront holds considerable significance, rendering it a pressing concern. In the developmental phase 
        our country is undergoing, achieving equitable electricity distribution appears challenging. The issue doesn't solely stem from a deficiency 
        in water resources but also revolves around the cost implications associated with harnessing electricity from available resources. 
        This financial hurdle renders resolution difficult in urban locales, consequently neglecting rural areas. Moreover, the repercussions of 
        urban energy shortages extend to harm rural regions. This prompts the need for a comprehensive and sustainable strategy to effectively address 
        this pressing concern.
        </p>
      </div>
    </div>
    <hr className="bold-line" />
    <div className="flex-container" style={{marginTop: "100px", marginBottom: "100px"}} >
      <div className="content">
        <h3> <AiOutlineQuestionCircle size={30} className='question' />Any Solutions? </h3>
        <p>
        In order to promote sustainability, it is imperative to establish a mechanism for the efficient reuse of available resources. One 
        innovative approach involves repurposing sewage water obtained from buildings as a means to generate electricity. Implementing such 
        a solution could significantly alleviate the prevailing electricity shortage, fostering a more equitable distribution. This not only 
        addresses the immediate energy crisis but also contributes to environmental sustainability and optimal resource utilization, addressing 
        the scarcity our country faces in various sectors. Embracing this solution could pave the way for a future where electricity-related 
        challenges are overcome, positioning us on par with advancements observed in other parts of the world.
        </p>
      </div>
      <div className="img-container img2">
      </div>
    </div>
  
    <hr className="bold-line" />
    <div className="btn-container" >
        <button className="button" onClick={services}>Learn More</button>
      </div>
      <hr className="bold-line" style={{marginBottom: "200px"}}/>
      <Testimonials/>
      <hr className="bold-line"/>
    </div>
  );
}
