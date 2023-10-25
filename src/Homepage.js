import architect from './image/architect.jpg';
import vicky from './image/1687790798218-removebg-preview (4).png';
import khilesh from './image/khilesh.png';
import prakhar from './image/Prakhar.png';
import suyash from './image/Suyash.png';
import kapil from './image/Kapil.png';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
//import Dashboard from './Dashboard';

import HeadOffNavbar from "./NavbarBox/headoff_navbar";
import StudentRegistration from "./screens/student_registration";
import RegistrationNavbar from "./NavbarBox/registration_navbar";
import NewAdmission from "./screens/new_admission";
import EditData from "./screens/edit_data";
import UploadData from "./upload_data";
import Withdraw from "./withdraw";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Auth/login";
import InstituteReg from "./new_institute";
import CourseRegistration from "./screens/course_registration";
import DeskRegistration from "./screens/desk_registration ";
import Display from "./display";
import { Link } from 'react-router-dom';
import AdminLogin from "./Auth/Adminlogin";
import StudentLogin from "./Auth/Studentlogin";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>


function HomePage(){
    const history = useHistory();
   const Navigate = (path)=>{
    
     history.push(path);
   }
    return(
        <>
         
  
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  {/* Navbar (sit on top) */}
  <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
    <Router>
      <Link to="/home" className="w3-bar-item w3-button">
        <b>ShikshBharat</b> Portal
      </Link>
      {/* Float links to the right. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
      <Link to='/RegistrationNavbar' className="w3-bar-item w3-button">
          Admin
        </Link>
        
        <Link href='' className="w3-bar-item w3-button">
          Institute
        </Link>
        <Link href='http://localhost:3000/studentlogin' className="w3-bar-item w3-button">
          Student's
        </Link>
        <Link href="#projects" className="w3-bar-item w3-button">
          Projects
        </Link>
        <Link href="#about" className="w3-bar-item w3-button">
          About
        </Link>
        <Link href="#contact" className="w3-bar-item w3-button">
          Contact
        </Link>
        
      </div>
      </Router>
    </div>
  </div>

  {/* Header */}
  <header
    className="w3-display-container w3-content w3-wide"
    style={{ maxWidth: 1500 }}
    id="home"
  >
    <img
      className="w3-image"
      src={architect}
      alt="Architecture"
      width={1500}
      height={800}
    />
    <div className="w3-display-middle w3-margin-top w3-center">
      <h1 className="w3-xxlarge w3-text-white">
        <span className="w3-padding w3-black w3-opacity-min">
          <b>Centralized Education Database Management System</b>
        </span>{" "}
        <span className="w3-hide-small w3-text-light-grey"></span>
      </h1>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    {/* Project Section */}
    <div className="w3-container w3-padding-32" id="projects">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Project
      </h3>
    
      <Router>
      <Switch>
               <Route exact path="/adminlogin" component={AdminLogin}>
                    
               </Route>
               <Route exact path="/studentlogin" component={StudentLogin}></Route>
               <Route exact path="/login" component={Login}></Route>
               {/* <Route exact path="/" component={Navbar}></Route> */}
               <ProtectedRoute exact path="/dashboard" component={RegistrationNavbar}></ProtectedRoute>
               <ProtectedRoute exact path="/registration" component={StudentRegistration}></ProtectedRoute>
               <ProtectedRoute exact path="/admission" component={NewAdmission}></ProtectedRoute>
               <ProtectedRoute exact path="/edit" component={EditData}></ProtectedRoute>
               <ProtectedRoute exact path="/upload" component={UploadData}></ProtectedRoute>
               <ProtectedRoute exact path="/withdraw" component={Withdraw}></ProtectedRoute>
               <ProtectedRoute exact path="/institute" component={InstituteReg}></ProtectedRoute>
               <ProtectedRoute exact path="/course" component={CourseRegistration}></ProtectedRoute>
               <ProtectedRoute exact path="/desk" component={DeskRegistration}></ProtectedRoute>
               <ProtectedRoute exact path="/info" component={Display}></ProtectedRoute>
               </Switch>
          </Router>
    </div>
    
    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        About
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col l3 m4 w3-margin-bottom">
        <img src={khilesh} alt="John" style={{ width: "90%" }} />
        <h3>Khilesh</h3>
        <p className="w3-opacity">Developer</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m4 w3-margin-bottom">
        <img src={prakhar} alt="Jane" style={{ width: "90%" }} />
        <h3>Prakhar</h3>
        <p className="w3-opacity">Developer</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m4 w3-margin-bottom">
        <img src={kapil} alt="Mike" style={{ width: "90%" }} />
        <h3>Kapil</h3>
        <p className="w3-opacity">Developer</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m4 w3-margin-bottom">
        <img src={vicky} alt="Dan" style={{ width: "90%" }} />
        <h3>Vicky</h3>
        <p className="w3-opacity">Developer</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
      <div className="w3-col l3 m4 w3-margin-bottom">
        <img src={suyash} alt="Dan" style={{ width: "90%" }} />
        <h3>Suyash</h3>
        <p className="w3-opacity">Developer</p>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
        <p>
          <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
      </div>
    </div>
    {/* Contact Section */}
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form action="/action_page.php" target="_blank">
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required=""
          name="Name"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Email"
          required=""
          name="Email"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required=""
          name="Subject"
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Comment"
          required=""
          name="Comment"
        />
        <button className="w3-button w3-black w3-section" type="submit">
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </button>
      </form>
    </div>
    {/* Image of location/map */}
    <div className="w3-container">
      <img
        src="/w3images/map.jpg"
        className="w3-image"
        style={{ width: "100%" }}
      />
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-16">
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        
      </a>
    </p>
  </footer>
  
</>

               
    

    );

}
export default HomePage;