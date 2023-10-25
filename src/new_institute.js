import RegistrationNavbar from "./NavbarBox/registration_navbar";
//import "./css/student_registration.css";

import InstituteRegForm from "./instituteregform";
function InstituteReg() {
   return(
    <>
                  <center>
                     <h1 style={{color:'ActiveBorder'}}>Centralized Education Database Management System Web App</h1>
                    </center>
      <div className="table table-responsive">
      <table>
      <tr>
         <td><RegistrationNavbar/></td>
         <td Style="width:100%">
            
           <InstituteRegForm></InstituteRegForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default InstituteReg;