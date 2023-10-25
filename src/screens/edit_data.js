import "./css/student_registration.css";
import RegistrationNavbar from "../NavbarBox/registration_navbar";
import StudentRegForm from "./studentregform";
function EditData() {
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
            
           <StudentRegForm></StudentRegForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default EditData;