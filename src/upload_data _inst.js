import HeadOffNavbar from "./NavbarBox/headoff_navbar";
import UploadDataForm from "./upload_data_form";



function UploadDataInst() {
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
            
           <UploadDataForm></UploadDataForm>

         </td>
      </tr>
    </table>
      </div>
   
    
  
    </>
   ) 

}

export default UploadDataInst;