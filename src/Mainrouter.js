import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
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
import { Link } from "react-router-dom/cjs/react-router-dom";
import AdminLogin from "./Auth/Adminlogin";
import StudentLogin from "./Auth/Studentlogin";

function Navbar() {
    var user = "RegistrationNavbar"
    if (user == "HeadOff") {
        
   } 
   else if(user=="student"){

   }

   
   else if (user == "RegistrationNavbar"){
        return (
          <Router>
          <div class="header">
            <a href="#default" class="logo">ShikshBharat</a>
                    
        <div class="header-right">
               {/* <Link to={{Login}}>Home</Link> */}
            <a class="active" href="#home" >Home</a>
            <a href='http://localhost:3000/adminlogin'>Admin </a>
            <a href="http://localhost:3000/login">Institute</a>
            <a href="http://localhost:3000/studentlogin">Student's Corner</a>
        </div>
        </div>
    
        
               <Switch>
               <Route exact path="/adminlogin" component={AdminLogin}>
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
               </Route>
               
               <Route exact path="/studentlogin" component={StudentLogin}>
               <ProtectedRoute exact path="/info" component={Display}></ProtectedRoute>
               </Route>
               
               
               <Route exact path="/institutelogin" component={Login}>
               <ProtectedRoute exact path="/registration" component={StudentRegistration}></ProtectedRoute>
               <ProtectedRoute exact path="/admission" component={NewAdmission}></ProtectedRoute>
               <ProtectedRoute exact path="/edit" component={EditData}></ProtectedRoute>
               <ProtectedRoute exact path="/upload" component={UploadData}></ProtectedRoute>
               <ProtectedRoute exact path="/withdraw" component={Withdraw}></ProtectedRoute>
               <ProtectedRoute exact path="/info" component={Display}></ProtectedRoute>
               </Route>
               
               
               <Route exact path="/" component={Navbar}></Route>
               
               </Switch>
          </Router>
          
        );
   }
}

export default Navbar;