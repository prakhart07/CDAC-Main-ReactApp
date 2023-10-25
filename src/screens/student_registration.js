import "./css/student_registration.css";
import RegistrationNavbar from "../NavbarBox/registration_navbar";
import StudentRegForm from "./studentregform";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function StudentRegistration() {
  tst()
   return(
    <>
      <center>
                     <h1 style={{color:'ActiveBorder'}}>Centralized Education Database Management System Web App</h1>
                    </center>
      <div className="table table-responsive">
      <ToastContainer/>
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
function tst(){
  toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
}


export default StudentRegistration;