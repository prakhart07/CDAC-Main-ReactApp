import "./css/student_registration.css";
import RegistrationNavbar from "../NavbarBox/registration_navbar";
import NewCourse from "./courseregistrationform";

function CourseRegistration() {
   return(
    <>
   
      <div className="table table-responsive">
                    <center>
                     <h1 style={{color:'ActiveBorder'}}>Centralized Education Database Management System Web App</h1>
                    </center>
      <table>
      <tr>
         <td><RegistrationNavbar/></td>
         <td Style="width:100%">
            
           <NewCourse></NewCourse>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default CourseRegistration;