import "./css/student_registration.css";
import StudentRegForm from "./studentregform";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HeadOffNavbar from "../NavbarBox/headoff_navbar";



function StudentRegistrationInst() {
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
         <td><HeadOffNavbar/></td>
         <td Style="width:100%">
            
           <StudentRegForm></StudentRegForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}



export default StudentRegistrationInst;
function tst(){
  toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
}