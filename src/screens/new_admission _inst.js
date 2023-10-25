import "./css/student_registration.css";
import NewAdmissionForm from "./newaddform";
import HeadOffNavbar from "../NavbarBox/headoff_navbar";
function NewAdmissionInst() {
   return(
    <>
    <center>
                     <h1 style={{color:'ActiveBorder'}}>Centralized Education Database Management System Web App</h1>
                    </center>
      <div className="table table-responsive">
      <table>
      <tr>
         <td><HeadOffNavbar/></td>
         <td Style="width:100%">
            
           <NewAdmissionForm></NewAdmissionForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default NewAdmissionInst;