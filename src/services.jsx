import Footer from "./footer";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <div className="service-container">
      <nav className="navbar">
        <Link to="/" className="logo">G-2</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
        </div>
      </div>
  );
};

const Content = () => {
  return (
    <div className="content-container">
      <h2>HYDROELECTRIC GENERATION FROM BUILDING SEWAGE</h2>
      <p>
        Electricity will be generated from sewage water collected from tall buildings. The utilization of the generated electricity will be tailored 
        to specific needs and power levels. Primarily, it can illuminate the building premises and serve various common purposes for its residents. 
        Additionally, the generated power can act as a backup during general power outages, reducing reliance on external sources. With ample power 
        production for individual rooms, the dependence on other energy sources diminishes, making it an environmentally sustainable choice.
      </p>
      <hr className="bold-line"/>
      <div className="flex-container">
      <div className="content content-2" >
        <h2>Design Process</h2>
        <p>The conceptual design phase of our service aligns seamlessly with the overall building design process, fostering collaboration with the building architects.
           This collaborative approach ensures a harmonious project flow, highlighting our distinctiveness in the process.
        </p>
      </div>
      <div className="img-container design img1"> </div>
    </div>
    <hr className="bold-line"/>
    <div style={{textAlign:"center"}}>
        <h2>Sample Design Of Our Model</h2>
        <p style={{textAlign:"center"}}>This is the design of our model that we implemented so far. The design choice depends upon the design of the overall building design
          , we are flexible enough to guarentee that the need of our customers is fullfilled.
        </p>
        <hr className="bold-line"/>
      </div>
    <div>
    <div className="img-container design-2 img1"> </div>
    </div>
      <hr className="bold-line"/>
      <div>
        <h2> Model Sample</h2>
        <hr className="bold-line"/>
        <div className="prototype"></div>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="App">
      <main className="App-header">
        <Header/>
        <hr className="bold-line"/>
        <Content/>
        <hr className="bold-line"/>
        <Footer/>
      </main>
    </div>
  );
}

export default Services;
