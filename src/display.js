import RegistrationNavbar from "./NavbarBox/registration_navbar";
import DisplayDataForm from "./displaydataform";
//import UploadDataForm from "./upload_data_form";
function Display() {
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
            
           <DisplayDataForm></DisplayDataForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default Display;